from datetime import datetime
from django.core.mail import send_mail
from rest_framework import viewsets, generics
from rest_framework.response import Response
from .forms import ClubsForm, NewClubsTestForm, GalleryForm, NewsForm, ReservationForm
from .serializers import *
from .models import PartnersModel
from .variables import variables
from .helper.helper import Helper

class PartnersView(viewsets.ModelViewSet):
  queryset = PartnersModel.objects.all()
  serializer_class = PartnersSerializer

class LoadAllClubData(generics.ListCreateAPIView):
  queryset = OneClubModel.objects.all()
  serializer_class = OneClubSerializer

  def get(self, request, *args, **kwargs):
    OneClubModel.objects.all().delete()
    clubData = variables.clubData

    for element in clubData:
      element.pop('id')
      serializer = self.get_serializer(data={'club': element})
      serializer.is_valid(raise_exception=True)
      serializer.save()

    queryset = OneClubModel.objects.all()
    queryset_list = OneClubSerializer(queryset, many=True).data
    helper = Helper()
    clubs_set = helper.collect_full_clubs_json(queryset_list)
    return Response(clubs_set)


class OneClubView(generics.ListCreateAPIView, generics.UpdateAPIView, generics.DestroyAPIView):
  queryset = OneClubModel.objects.all()
  serializer_class = OneClubSerializer

  def get(self, request, *args, **kwargs):

    queryset = OneClubModel.objects.all()
    queryset_list = OneClubSerializer(queryset, many=True).data

    helper = Helper()
    clubs_set = helper.collect_full_clubs_json(queryset_list)
    return Response(clubs_set)

  def post(self, request, *args, **kwargs):
    one_club = request.data
    serializer = self.get_serializer(data={'club': one_club})
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response({"message": "клуб сохранен", "club": one_club})

  def put(self, request, *args, **kwargs):
    return self.update(request, *args, **kwargs)

  def update(self, request, *args, **kwargs):
    partial = kwargs.pop('partial', False)
    instance = self.get_object()
    serializer = self.get_serializer(instance, data={"club": request.data}, partial=partial)
    serializer.is_valid(raise_exception=True)
    self.perform_update(serializer)

    if getattr(instance, '_prefetched_objects_cache', None):
      # If 'prefetch_related' has been applied to a queryset, we need to
      # forcibly invalidate the prefetch cache on the instance.
      instance._prefetched_objects_cache = {}
    return Response(serializer.data)

class ClubsView(generics.ListCreateAPIView, generics.UpdateAPIView, generics.DestroyAPIView):
  queryset = ClubsModel.objects.all()
  serializer_class = ClubsSerializer

  def post(self, request, *args, **kwargs):
    form = ClubsForm(request.POST, request.FILES)
    form_valid = form.is_valid
    if form.is_valid():
      # Helper().handle_uploaded_file(request.FILES["clubPhoto"])
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response({'message': "Файл сохранен"})
    else:
      form = ClubsForm()
    return Response({"message": "Не корректно заполнена форма"})

# class SendInfoToUserView(generics.ListCreateAPIView):
#   queryset = SendInfoToUserModel.objects.all()
#   serializer_class = SendInfoToUserSerializer
#
#   def post(self, request, *args, **kwargs):
#     form = SendInfoToUserForm(request.POST)
#     if form.is_valid():
#       # serializer = self.get_serializer(data=request.data)
#       # serializer.is_valid(raise_exception=True)
#       # serializer.save()
#
#       # send email
#
#       return self.create(request, *args, **kwargs)
#     else:
#       form = ClubsForm()
#     return Response({"error": "form is invalid"})

class NewClubTestView(generics.ListCreateAPIView):
  queryset = NewClubsTestModel.objects.all()
  serializer_class = NewClubsTestSerializer

  def post(self, request, *args, **kwargs):
    form = NewClubsTestForm(request.POST, request.FILES)
    print(request.data)
    if form.is_valid():
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response({'message': "клуб сохранен"})
    return Response({"message": "Не корректно заполнена форма"})

class CollectClubView(generics.ListCreateAPIView, generics.DestroyAPIView):
  queryset = CollectClubModel.objects.all()
  serializer_class = CollectClubSerializer

  def get(self, request, *args, **kwargs):
    return self.list(request, *args, **kwargs)

  def list(self, request, *args, **kwargs):
    queryset = CollectClubModel.objects.filter(name__isnull=False).filter(contacts__isnull=False).filter(price__isnull=False).filter(computerSpecs__isnull=False).filter(quantityComputers__isnull=False).all()

    page = self.paginate_queryset(queryset)
    if page is not None:
      serializer = self.get_serializer(page, many=True)
      return self.get_paginated_response(serializer.data)

    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data)

  def post(self, request, *args, **kwargs):
    helper = Helper()

    data = request.data
    keys = list(request.data.keys())
    club_name = request.data['name'] if 'name' in request.data.keys() else request.data[keys[0]]['name']

    custom_request = CollectClubModel.objects.filter(name=club_name).all()
    if not custom_request:
      serializer = self.get_serializer(data={'name': club_name})
      serializer.is_valid(raise_exception=True)
      serializer.save()
      print('has been wrote')

    else:
      print('exists')

    if 'name' in request.data.keys():
      form = NewClubsTestForm(request.POST, request.FILES)
      if form.is_valid():
        custom_response = CollectClubModel.objects.filter(name=request.data['name']).all()
        if not custom_response:
          serializer = self.get_serializer(data=request.data)
          serializer.is_valid(raise_exception=True)
          serializer.save()
          return Response({'message': f"Клуб {club_name} создан"})
        else:
          instance = CollectClubModel.objects.get(name=request.data['name'])
          serializer = CollectClubSerializer(data=request.data, instance=instance)
          serializer.is_valid(raise_exception=True)
          serializer.save()
          return Response({"message": f"Клуб {club_name} был обновлен"})
      return Response({"message": "Не корректно заполнена форма"})

    elif 'contacts' in request.data.keys():
      request.data['contacts'].pop('name')
      CollectClubModel.objects.filter(name=club_name).update(contacts=request.data['contacts'])

    elif 'price' in request.data.keys():
      custom_request = CollectClubModel.objects.get(name=club_name).price
      custom_request = helper.check_the_fields(request, custom_request, 'price')
      CollectClubModel.objects.filter(name=club_name).update(price=custom_request)


    elif 'computerSpecs' in request.data.keys():
      custom_request = CollectClubModel.objects.get(name=club_name).computerSpecs
      custom_request = helper.check_the_fields(request, custom_request, 'computerSpecs')
      CollectClubModel.objects.filter(name=club_name).update(computerSpecs=custom_request)


    elif 'quantityComputers' in request.data.keys():
      custom_request = CollectClubModel.objects.get(name=club_name).quantityComputers

      request.data['quantityComputers'].pop('name')
      CollectClubModel.objects.filter(name=club_name).update(quantityComputers=request.data['quantityComputers'])

    return Response({"message": f"Клуб {club_name} обновлен"})

class GalleryView(generics.ListCreateAPIView, generics.DestroyAPIView, generics.UpdateAPIView):
  queryset = GalleryModel.objects.all()
  serializer_class = GalleryModelSerializer

  def post(self, request, *args, **kwargs):
    form = GalleryForm(request.data, request.FILES)
    if form.is_valid():
      request.data['date'] = datetime.now()
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response({'message': 'Объект добавлен в галлерею'})
    else:
      return Response({'message': 'Не корректно заполнена форма'})

  def put(self, request, *args, **kwargs):
    if GalleryForm(request.data, request.FILES).is_valid():
      if 'date' not in request.data:
        request.data['date'] = datetime.now()
      return self.update(request, *args, **kwargs)
    else:
      return Response({'message': 'Не корректно заполнена форма'})

  def get(self, request, *args, **kwargs):
    self.limit = int(request.query_params['limit']) if 'limit' in request.query_params else 0
    self.offset = int(request.query_params['offset']) if 'offset' in request.query_params else 0
    self.club_name = request.query_params['club_name'] if 'club_name' in request.query_params else None
    to = self.offset+self.limit if self.limit else None
    queryset = GalleryModel.objects.order_by('id').filter(name=self.club_name).all()[self.offset:to]
    return Response({self.club_name: self.get_serializer(queryset, many=True).data}) if self.club_name else Response({'message': 'Укажите имя клуба'})

class NewsView(generics.ListCreateAPIView, generics.DestroyAPIView, generics.UpdateAPIView):
  queryset = NewsModel
  serializer_class = NewsSerializer

  def post(self, request, *args, **kwargs):
    form = NewsForm(request.data, request.FILES)
    if form.is_valid():
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response({'message': 'Новость была записана'})
    else:
      return Response({'message': 'Не корректно заполнена форма'})

  def get(self, request, *args, **kwargs):
    queryset = NewsModel.objects.all().order_by("id")
    return Response(NewsSerializer(queryset, many=True).data)

class ReservationView(generics.ListCreateAPIView):
  queryset = ReservationModel
  serializer_class = ReservatonSerializer

  def post(self, request, *args, **kwargs):
    if 'recipient' in request.data:
        recipient_list = [request.data['recipient'], ]
    else:
        try:
            contacts = CollectClubModel.objects.get(name=request.data['club']).contacts
            if not contacts or 'email' not in contacts or not contacts['email']:
              return Response({"message": "У клуба нет email"})
        except Exception as ex:
            return Response({"message": "Клуба с таким именем не существует"})
        recipient_list = [contacts['email'], ]

    form = ReservationForm(request.data)
    if form.is_valid():
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()

      helper = Helper()
      text_mail = helper.compose_mail_text(request)

      return Response({'message': 'Письмо отправлено'}) \
        if send_mail(subject="Reservation", message=text_mail, from_email=variables.email_from, recipient_list=recipient_list) \
        else Response({"message": False})

    else:
      return Response({'message': 'Не корректно заполнена форма'})

  def list(self, request, *args, **kwargs):
    queryset = ReservationModel.objects.all()

    page = self.paginate_queryset(queryset)
    if page is not None:
      serializer = self.get_serializer(page, many=True)
      return self.get_paginated_response(serializer.data)

    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data)


