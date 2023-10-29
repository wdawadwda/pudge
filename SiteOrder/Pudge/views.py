from django.http import HttpResponseRedirect
from django.shortcuts import render
from psycopg2._json import Json
from rest_framework import viewsets, generics
from rest_framework.response import Response
from .forms import ClubsForm
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
    return Response({"status": "has been saved", "club": one_club})

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
      # Helper().handle_uploaded_file(request.FILES["clubPhoto"])
      serializer = self.get_serializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response({'message': "picture has been saved"})
    else:
      form = ClubsForm()
    return Response({"f": "d"})

# class Club2View(generics.ListCreateAPIView, generics.UpdateAPIView, generics.DestroyAPIView):
#   queryset = Club2Model.objects.all()
#   serializer_class = club2Serializer
#
#   def get(self, request, *args, **kwargs):
#     queryset = Club2Model.objects.all()
#     serializer = club2Serializer(queryset, many=True)
#     return Response(serializer.data)
#
#   def post(self, request, *args, **kwargs):
#     data = request.data
#     form = Club2Form(request.POST, request.FILES)
#     if form.is_valid():
#       serializer = self.get_serializer(data=request.data)
#       serializer.is_valid(raise_exception=True)
#       serializer.save()
#       returned_object = Club2Model.objects.latest('id')
#       picture_url = {'picture_url': f"{club2Serializer(returned_object).data['img']}"}
#       print(picture_url)
#
#       return Response({'message': "object has been saved"})
#     else:
#       form = Club2Form()
#     return Response({"f": "d"})
#

