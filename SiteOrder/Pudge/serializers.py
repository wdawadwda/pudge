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
    # read_only_fields = ('image_url',)

  def get_image_url(self, obj):
    return obj.get_absolute_url()

class SendInfoToUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = SendInfoToUserModel
    fields = "__all__"

class NewClubsTestSerializer(serializers.ModelSerializer):
  class Meta:
    model = NewClubsTestModel
    fields = "__all__"

class CollectClubSerializer(serializers.ModelSerializer):
  class Meta:
    model = CollectClubModel
    fields = "__all__"

class GalleryModelSerializer(serializers.ModelSerializer):
  class Meta:
    model = GalleryModel
    fields = "__all__"


# class club2Serializer(serializers.ModelSerializer):
#   class Meta:
#     model = Club2Model
#     fields = "__all__"
#
#   def get_image_url(self, obj):
#     return obj.get_absolute_url()
