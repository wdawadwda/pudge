from datetime import datetime
from django.core.mail import EmailMessage
from django.shortcuts import redirect
from django.core.mail import send_mail
from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .forms import ClubsForm, NewClubsTestForm, GalleryForm, NewsForm, ReservationForm, PartnersForm
from .serializers import *
from .models import PartnersModel
from .variables import variables
from .helper.helper import Helper

class PartnersView(viewsets.ModelViewSet):
  queryset = PartnersModel.objects.all()
  serializer_class = PartnersSerializer

  def create(self, request, *args, **kwargs):
    try:
      form = PartnersForm(request.data, request.FILES)
      if form.is_valid():
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
      else:
        return Response({"error": "Не корректно заполнена форма"})
    except:
      return Response({"error": "Что-то пошло не так"})

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
    if form.is_valid():
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response({'message': "Файл сохранен"})
    else:
      return Response({"message": "Не корректно заполнена форма"})

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

# class GalleryView(generics.ListCreateAPIView, generics.DestroyAPIView, generics.UpdateAPIView):
#   queryset = GalleryModel.objects.all()
#   serializer_class = GalleryModelSerializer
#
#   def post(self, request, *args, **kwargs):
#     form = GalleryForm(request.data, request.FILES)
#     if form.is_valid():
#       request.data['date'] = datetime.now()
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       serializer.save()
#       return Response({'message': 'Объект добавлен в галлерею'})
#     else:
#       return Response({'message': 'Не корректно заполнена форма'})
#
#   def put(self, request, *args, **kwargs):
#     if GalleryForm(request.data, request.FILES).is_valid():
#       if 'date' not in request.data:
#         request.data['date'] = datetime.now()
#       return self.update(request, *args, **kwargs)
#     else:
#       return Response({'message': 'Не корректно заполнена форма'})
#
#   def get(self, request, *args, **kwargs):
#     self.limit = int(request.query_params['limit']) if 'limit' in request.query_params else 0
#     self.offset = int(request.query_params['offset']) if 'offset' in request.query_params else 0
#     self.club_name = request.query_params['club_name'] if 'club_name' in request.query_params else None
#     to = self.offset+self.limit if self.limit else None
#     queryset = GalleryModel.objects.order_by('id').filter(name=self.club_name).all()[self.offset:to]
#
#     helper = Helper()
#     queryset = helper.move_fields_from_queryset(queryset=self.get_serializer(queryset, many=True).data, moving_fields=['name'])
#
#     return Response({self.club_name: queryset}) if self.club_name else Response({'message': 'Укажите имя клуба'})

class NewsView(generics.ListCreateAPIView, generics.DestroyAPIView, generics.UpdateAPIView):
  queryset = NewsModel.objects.all()
  serializer_class = NewsSerializer

  def post(self, request, *args, **kwargs):
    form = NewsForm(request.data, request.FILES)
    if form.is_valid():
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      id = serializer.save().pk
      text_mail = variables.text_mail + request.data['title'] + f"\n{variables.text_mail_news_link}"
      recipient_list = list(CustomUser.objects.values_list('email', flat=True))
      try:
        email = EmailMessage(
          subject=variables.text_mail_object,
          body=text_mail,
          from_email=variables.email_from,
          to=[variables.admin_email,],
          bcc=recipient_list,
        )
        email.send()
        # send_mail(subject=variables.text_mail_object, message=text_mail, from_email=variables.email_from, recipient_list=recipient_list)
      except:
        return Response({"error": "Новость была записана, но не разослана на имейлы"})
      return Response({'message': 'Новость была записана и разослана на имейлы'})
    else:
      return Response({'error': 'Не корректно заполнена форма'})

  def get(self, request, *args, **kwargs):
    ex = None
    id = kwargs['pk'] if 'pk' in kwargs else None
    if id:
      try:
        queryset = NewsModel.objects.filter(id=id).get()
        return Response(self.get_serializer(queryset).data)
      except Exception as ex:
        return Response({"error": f"Записи с номером {id} не существует"} if not ex else {"error": str(ex)})

    self.limit = int(request.query_params['limit']) if 'limit' in request.query_params else 0
    self.offset = int(request.query_params['offset']) if 'offset' in request.query_params else 0
    to = self.offset+self.limit if self.limit else None

    queryset = NewsModel.objects.order_by('id').all().reverse()[self.offset:to]
    return Response(self.get_serializer(queryset, many=True).data)

class AllNewsView(generics.ListAPIView):
  queryset = NewsModel.objects.count()
  serializer_class = NewsSerializer

  def get(self, request, *args, **kwargs):
    queryset = NewsModel.objects.count()
    return Response({"quantityNews": queryset})

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

class GetClubsNameView(generics.ListAPIView):
  queryset = GalleryUpdatedModel
  serializer_class = GetClubNames

  def get(self, request, *args, **kwargs):
    queryset = GetClubNames(GalleryUpdatedModel.objects.order_by('name').all(), many=True).data
    clubs = {}
    names = []
    for club in queryset:
      club = dict(club)
      if club['name'] not in names:
        names.append(club['name'])
        club['quantityPictures'] = GalleryUpdatedModel.objects.filter(name=club['name']).count()

        if 'clubsGallery' not in clubs:
          clubs['clubsGallery'] = []
        clubs['clubsGallery'].append(club['name'])

        if 'galeryTotalPhoto' not in clubs:
          clubs['galeryTotalPhoto'] = []
        clubs['galeryTotalPhoto'].append(club)


    return Response(clubs)

class GalleryUpdatedView(generics.ListCreateAPIView, generics.UpdateAPIView, generics.DestroyAPIView, APIView):
  queryset = GalleryUpdatedModel
  serializer_class = GalleryUpdatesSerializer

  def post(self, request, *args, **kwargs):
    form = GalleryForm(request.data, request.FILES)
    if form.is_valid():
      last_id_object = GalleryUpdatedModel.objects.order_by('id_object').values('id_object').last()
      if not last_id_object:
        last_id_object = 0
      else:
        last_id_object = last_id_object['id_object'] + 1
      request.data['id_object'] = last_id_object
      request.data['date'] = datetime.now()

      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response({"message": "Фото сохранено в галерею"})
    else:
      return Response({"message": "Не корректно заполнена форма"})

  def put(self, request, *args, **kwargs):
    id_object = kwargs['pk']
    instance = GalleryUpdatedModel.objects.get(id_object=id_object)

    if 'id_object' not in request.data:
      request.data['id_object'] = id_object

    if 'date' not in request.data:
      request.data['date'] = datetime.now()

    form = GalleryForm(request.data, request.FILES)
    if form.is_valid():
      partial = kwargs.pop('partial', False)
      serializer = self.get_serializer(instance, data=request.data, partial=partial)
      serializer.is_valid(raise_exception=True)
      serializer.save()
    else:
      return Response({"message": "Не корректно заполнена форма"})

    if getattr(instance, '_prefetched_objects_cache', None):
      instance._prefetched_objects_cache = {}

    return Response(serializer.data)

  def delete(self, request, *args, **kwargs):
    return self.destroy(request, *args, **kwargs)

  def destroy(self, request, *args, **kwargs):

    id_object = kwargs['pk']
    try:
      instance = GalleryUpdatedModel.objects.get(id_object=id_object)
    except:
      return Response({"message": "Записи с таким id_object не существует"})
    self.perform_destroy(instance)

    queryset = GalleryUpdatedModel.objects.filter(id_object__gt=id_object).all()
    queryset_custom = GalleryUpdatesSerializer(queryset, many=True).data
    for item in range(0, len(queryset)):
      instance = queryset[item]
      object = dict(queryset_custom[item])
      object['id_object'] -= 1
      object.pop('img')
      serializer = self.get_serializer(instance, object)
      serializer.is_valid(raise_exception=True)
      serializer.save()
    return Response(status=status.HTTP_204_NO_CONTENT)

  def get(self, request, *args, **kwargs):
    if "delete_club_name" in request.query_params:
      GalleryUpdatedModel.objects.filter(name=request.query_params['delete_club_name']).delete()
      return Response({"message": f"Фото клуба {request.query_params['delete_club_name']} удалены"})

    self.id = request.query_params['id'] if 'id' in request.query_params else None
    if self.id:
      try:
        queryset = GalleryUpdatedModel.objects.filter(id=self.id).all()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data[0])
      except:
        return Response({"message": f"Запись с id={self.id} не найдена"})

    self.limit = int(request.query_params['limit']) if 'limit' in request.query_params else 0
    self.offset = int(request.query_params['offset']) if 'offset' in request.query_params else 0
    self.club_name = request.query_params['club_name'] if 'club_name' in request.query_params else None
    to = self.offset+self.limit if self.limit else None
    queryset = GalleryUpdatedModel.objects.order_by('id_object').filter(name=self.club_name).all().reverse()[self.offset:to]

    helper = Helper()
    queryset = helper.move_fields_from_queryset(queryset=self.get_serializer(queryset, many=True).data, moving_fields=['name'])

    return Response({self.club_name: queryset}) if self.club_name else Response({'message': 'Укажите имя клуба'})

class MainMapView(generics.ListCreateAPIView):
  queryset = MainMapModel.objects.all()
  serializer_class = MainMapSerializer

  def list(self, request, *args, **kwargs):
    queryset = self.filter_queryset(self.get_queryset())
    page = self.paginate_queryset(queryset)
    if page is not None:
      serializer = self.get_serializer(page, many=True)
      return Response(serializer.data[0])
    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data[0])

  def post(self, request, *args, **kwargs):
    try:
        queryset = MainMapModel.objects.last()
        if queryset:
          queryset = self.get_serializer(queryset)
          MainMapModel.objects.filter(id=queryset.data['id']).update(mainMap=request.data['mainMap'])
        else:
          serializer = self.get_serializer(data=request.data)
          serializer.is_valid(raise_exception=True)
          serializer.save()
        return Response({"message": "ссылка сохранена"})
    except:
        return Response({"error": "Что-то пошло не так"})

class ActivateView(generics.ListAPIView):
  def get(self, request, *qrgs, **kwargs):
    redirect_url = f"{variables.domain}/activate/{kwargs['uid']}/{kwargs['token']}"
    return redirect(redirect_url)

class CustomAuth():
  def __init__(self):
    super().__init__()

  def get(self, request, *args, **kwargs):
    pass
