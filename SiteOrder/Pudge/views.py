from rest_framework import viewsets, generics
from rest_framework.response import Response
from .serializers import *
from .models import PartnersModel
from .variables import variables
from .helper import Helper

class PartnersView(viewsets.ModelViewSet):
  queryset = PartnersModel.objects.all()
  serializer_class = PartnersSerializer

# class ClubsView(viewsets.ModelViewSet):
#   queryset = ClubsModel.objects.all()
#   serializer_class = ClubsSerializer
#
# class TariffView(viewsets.ModelViewSet):
#   queryset = TariffModel.objects.all()
#   serializer_class = TariffSerializer
#
# class ComputerSpecView(viewsets.ModelViewSet):
#   queryset = ComputerSpecModel.objects.all()
#   serializer_class = ComputerSpecSerializer
#
# class QuantityComputersView(viewsets.ModelViewSet):
#   queryset = QuantityComputersModel.objects.all()
#   serializer_class = QuantityComputersSerializer
#
# class GetFullJsonView(viewsets.ModelViewSet):
#   queryset = ClubsFullJsonModel.objects.all()
#   serializer_class = ClubsFullSerializer
#
# class CollectFullJsonView(viewsets.ModelViewSet):
#   queryset = ClubsFullJsonModel.objects.all()
#   serializer_class = ClubsFullSerializer
#
#   def __init__(self):
#     super().__init__()
#
#   def get_queryset(self):
#     self.main_clubs = []
#     self.main_tariffs = []
#     self.main_computer_spec = []
#     self.main_quantity_computer = []
#
#     ClubsFullJsonModel.objects.all().delete()
#     self.get_clubs()
#
#     for club in self.main_clubs:
#       self.get_tariff(filter_param=club['id'])
#       self.get_quantity_computers(filter_param=club['id'])
#
#       for tariff in self.main_tariffs:
#         self.get_computer_spec(filter_param=tariff['id'])
#
#     json_collection = self.collect_json_data()
#
#     return json_collection
#
#   def collect_json_data(self):
#     self.clubsData = list()
#     for club in self.main_clubs:
#       self.clubsData.append(club)
#
#       # collect priceData
#       if 'priceData' not in self.clubsData[-1]:
#         self.clubsData[-1]['priceData'] = {}
#       for tariff in self.main_tariffs:
#         if tariff['fk_club_name'] == club['id']:
#
#           if 'computerSpecs' not in self.clubsData[-1]:
#             self.clubsData[-1]['computerSpecs'] = {}
#           for spec in self.main_computer_spec:
#             if spec['fk_tariff_name'] == tariff['id'] and tariff['fk_club_name'] == club['id']:
#               if tariff['name'] not in self.clubsData[-1]['computerSpecs']:
#                 self.clubsData[-1]['computerSpecs'][tariff['name']] = {}
#               self.clubsData[-1]['computerSpecs'][tariff['name']] = spec
#
#           tariff.pop('id')
#           tariff.pop('fk_club_name')
#           self.clubsData[-1]['priceData'][tariff['name']] = tariff
#           self.clubsData[-1]['priceData'][tariff['name']]['tariff'] = tariff['name']
#
#       self.clubsData[-1]['quantityСomputers'] = {}
#       for quantity_computers in self.main_quantity_computer:
#         if quantity_computers['fk_club_name'] == club['id']:
#           self.clubsData[-1]['quantityСomputers'] = quantity_computers
#       serializer = self.get_serializer(data={'club': self.clubsData[-1]})
#       serializer.is_valid(raise_exception=True)
#       serializer.save()
#     return ClubsFullJsonModel.objects.all()
#
#   def get_clubs(self):
#     contacts_keys = ['address', 'phone', 'instagram']
#     queryset = ClubsModel.objects.all()
#     clubs_response = ClubsInfoSerializer(queryset, many=True).data
#     for club in clubs_response:
#       club = dict(club)
#       club['contacts'] = {}
#       for key in club:
#         if key in contacts_keys:
#           club['contacts'][key] = club[key]
#       [club.pop(key) for key in contacts_keys]
#       self.main_clubs.append(dict(club))
#     return {}
#
#   def get_tariff(self, filter_param):
#     queryset = TariffModel.objects.filter(fk_club_name=filter_param)
#     tariffs_response = TariffSerializer(queryset, many=True).data
#     for tariff in tariffs_response:
#       self.main_tariffs.append(dict(tariff))
#     return {}
#
#   def get_computer_spec(self, filter_param):
#     queryset = ComputerSpecModel.objects.filter(fk_tariff_name=filter_param)
#     computer_spec_response = ComputerSpecSerializer(queryset, many=True).data
#     for computer_spec in computer_spec_response:
#       self.main_computer_spec.append(dict(computer_spec))
#
#   def get_quantity_computers(self, filter_param):
#     queryset = QuantityComputersModel.objects.filter(fk_club_name=filter_param)
#     quantity_computers_response = QuantityComputersSerializer(queryset, many=True).data
#     for quantity_computer in quantity_computers_response:
#       self.main_quantity_computer.append(dict(quantity_computer))


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

