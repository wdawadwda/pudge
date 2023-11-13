from rest_framework import serializers
from .models import *

class PartnersSerializer(serializers.ModelSerializer):
  class Meta:
    model = PartnersModel
    fields = '__all__'

class ClubsFullSerializer(serializers.ModelSerializer):
  class Meta:
    model = ClubsFullJsonModel
    fields = '__all__'

class OneClubSerializer(serializers.ModelSerializer):
  class Meta:
    model = OneClubModel
    fields = '__all__'

class ClubsSerializer(serializers.ModelSerializer):
  class Meta:
    model = ClubsModel
    fields = "__all__"

  def get_image_url(self, obj):
    return obj.get_absolute_url()

class NewClubsTestSerializer(serializers.ModelSerializer):
  class Meta:
    model = NewClubsTestModel
    fields = "__all__"

class CollectClubSerializer(serializers.ModelSerializer):
  class Meta:
    model = CollectClubModel
    fields = "__all__"

class ReservatonSerializer(serializers.ModelSerializer):
  class Meta:
    model = ReservationModel
    fields = "__all__"

class GetClubNames(serializers.ModelSerializer):
  class Meta:
    model = CollectClubModel
    fields = ("name", )

class GalleryUpdatesSerializer(serializers.ModelSerializer):
  class Meta:
    model = GalleryUpdatedModel
    fields = "__all__"

class MainMapSerializer(serializers.ModelSerializer):
  class Meta:
    model = MainMapModel
    fields = "__all__"

class NewsSerializer(serializers.ModelSerializer):
  class Meta:
    model = NewsModel
    fields = "__all__"

  def get_image_url(self, obj):
    return obj.get_absolute_url()

