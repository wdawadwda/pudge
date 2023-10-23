from rest_framework import serializers
from .models import *

class PartnersSerializer(serializers.ModelSerializer):
  class Meta:
    model = PartnersModel
    fields = '__all__'

class ClubsSerializer(serializers.ModelSerializer):
  class Meta:
    model = ClubsModel
    fields = '__all__'

class TariffSerializer(serializers.ModelSerializer):
  class Meta:
    model = TariffModel
    fields = '__all__'

class ComputerSpecSerializer(serializers.ModelSerializer):
  class Meta:
    model = ComputerSpecModel
    fields = '__all__'

class QuantityComputersSerializer(serializers.ModelSerializer):
  class Meta:
    model = QuantityComputersModel
    fields = '__all__'

class ClubsInfoSerializer(serializers.ModelSerializer):
  class Meta:
    model = ClubsModel
    fields = '__all__'

class ClubsFullSerializer(serializers.ModelSerializer):
  class Meta:
    model = ClubsFullJsonModel
    fields = '__all__'
