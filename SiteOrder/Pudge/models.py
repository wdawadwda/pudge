from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models

class CustomUser(AbstractUser):
  email = models.EmailField(db_index=True, unique=True)
  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email', 'is_staff']
  objects = UserManager()

  def __str__(self):
    return self.username

class PartnersModel(models.Model):
  name = models.CharField(max_length=300, blank=False)
  img = models.CharField(max_length=400, blank=False)
  url = models.CharField(max_length=200, blank=False)

  def __str__(self):
    return self.name

class ClubsFullJsonModel(models.Model):
  club = models.JSONField(unique=True)

class OneClubModel(models.Model):
  club = models.JSONField(blank=False, unique=True)

class ClubsModel(models.Model):
  name = models.CharField()
  map = models.CharField()
  img = models.FileField()
  contacts = models.JSONField()
  priceData = models.JSONField()
  computerSpecs = models.JSONField()
  quantityComputers = models.JSONField()\


  def get_absolute_url(self):
    pass
    return self.img.url

  def __str__(self):
    return str(self.img.url)

class SendInfoToUserModel(models.Model):
  name = models.CharField()
  phoneNumber = models.CharField()
  usernameTelegram = models.CharField(blank=True)
  clubName = models.CharField()
  reservationTime = models.CharField()
  seatsNumber =  models.IntegerField()
  clubEMail = models.CharField()


class NewClubsTestModel(models.Model):
  name = models.CharField(blank=False)
  map = models.CharField(blank=True)
  img = models.FileField(blank=True)

  def get_absolute_url(self):
    pass
    return self.img.url

  def __str__(self):
    return str(self.img.url)

# class Club2Model(models.Model):
#   name = models.CharField()
#   map = models.CharField()
#   img = models.FileField()
#   contacts = models.JSONField()
#   priceData = models.JSONField()
#   computerSpecs = models.JSONField()
#   quantityComputers = models.JSONField()
#
#   def get_absolute_url(self):
#     pass
#     return self.img.url
#
#   def __str__(self):
#     return str(self.img.url)

class CollectClubModel(models.Model):
  name = models.CharField(blank=False, null=False, unique=True)
  map = models.CharField(blank=True, null=True)
  img = models.FileField(blank=True, null=True)
  contacts = models.JSONField(blank=True, null=True)
  price = models.JSONField(blank=True, null=True)
  computerSpecs = models.JSONField(blank=True, null=True)
  quantityComputers = models.JSONField(blank=True, null=True)

  def __str__(self):
    return self.name

  def get_absolute_url(self):
    return self.img.url

class GalleryModel(models.Model):
  name = models.CharField(blank=False, null=False)
  img = models.FileField(blank=True, null=True)
  date = models.DateTimeField()

  def __str__(self):
    return self.img + self.name

  def get_absolute_url(self):
    return self.img.url

class NewsModel(models.Model):
  title = models.CharField(blank=False, null=False)
  img = models.FileField
  text1 = models.CharField(null=True)
  text2 = models.CharField(null=True)
  text3 = models.CharField(null=True)

  def get_absolute_url(self):
    return self.img.url

class ReservationModel(models.Model):
  name = models.CharField()
  phone_number = models.CharField()
  telegram = models.CharField(blank=True, null=True)
  club = models.CharField()
  reservation_time = models.CharField()
  quantity_seats = models.CharField()



