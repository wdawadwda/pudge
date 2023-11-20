from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from django.core.validators import FileExtensionValidator

class CustomUser(AbstractUser):
  email = models.EmailField(db_index=True, unique=True)
  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email', 'is_staff']
  objects = UserManager()

  def __str__(self):
    return self.username

class PartnersModel(models.Model):
  name = models.CharField(max_length=254, blank=False, unique=True)
  img = models.FileField()
  url = models.CharField(max_length=500, blank=False, null=True)
  # text = models.CharField(max_length=2000, blank=True, null=True)

  def __str__(self):
    return self.name

  def get_absolute_url(self):
    pass
    return self.img.url

class ClubsFullJsonModel(models.Model):
  club = models.JSONField() # unique=True

class OneClubModel(models.Model):
  club = models.JSONField(blank=False) # , unique=True

class ClubsModel(models.Model):
  name = models.CharField(max_length=100)
  map = models.CharField(max_length=10000)
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
  name = models.CharField(max_length=100)
  phoneNumber = models.CharField(max_length=30)
  usernameTelegram = models.CharField(max_length=70,blank=True)
  clubName = models.CharField(max_length=100)
  reservationTime = models.CharField(max_length=100)
  seatsNumber =  models.IntegerField()
  clubEMail = models.CharField(max_length=70)

class NewClubsTestModel(models.Model):
  name = models.CharField(max_length=100, blank=False)
  map = models.CharField(max_length=10000, blank=True)
  img = models.FileField(blank=True)

  def get_absolute_url(self):
    pass
    return self.img.url

  def __str__(self):
    return str(self.img.url)

class CollectClubModel(models.Model):
  name = models.CharField(max_length=100, blank=False, null=False, unique=True)
  map = models.CharField(max_length=10000, blank=True, null=True)
  img = models.FileField(blank=True, null=True)
  contacts = models.JSONField(blank=True, null=True)
  price = models.JSONField(blank=True, null=True)
  computerSpecs = models.JSONField(blank=True, null=True)
  quantityComputers = models.JSONField(blank=True, null=True)

  def __str__(self):
    return self.name

  def get_absolute_url(self):
    return self.img.url

class ReservationModel(models.Model):
  name = models.CharField(max_length=100)
  phone_number = models.CharField(max_length=20)
  telegram = models.CharField(max_length=100, blank=True, null=True)
  club = models.CharField(max_length=100)
  tariff = models.CharField(max_length=100)
  reservation_time = models.CharField(max_length=100)
  quantity_seats = models.CharField(max_length=400)

class GalleryUpdatedModel(models.Model):
  id_object = models.IntegerField(blank=False, null=False, unique=True)
  name = models.CharField(max_length=100, blank=False, null=False)
  img = models.FileField(blank=True, null=True)
  date = models.DateTimeField()
  text = models.TextField(blank=True, null=True)

  def __str__(self):
    return self.img

  def get_absolute_url(self):
    return self.img.url

class MainMapModel(models.Model):
  mainMap = models.CharField(max_length=10000)

class NewsModel(models.Model):
  title = models.CharField(max_length=300, blank=False, null=False)
  img = models.FileField()
  text1 = models.TextField(null=True)
  text2 = models.TextField(null=True)
  text3 = models.TextField(null=True)

  def get_absolute_url(self):
    return self.img.url

