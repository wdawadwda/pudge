from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models

class CustomUser(AbstractUser):
  email = models.EmailField(db_index=True, unique=True)
  USERNAME_FIELD = 'username'
  REQUIRED_FIELDS = ['email']
  objects = UserManager()

  def __str__(self):
    return self.username

class PartnersModel(models.Model):
  name = models.CharField(max_length=300, blank=False)
  img = models.CharField(max_length=400, blank=False)
  url = models.CharField(max_length=200, blank=False)

  def __str__(self):
    return self.name

class ClubsModel(models.Model):
  name = models.CharField(max_length=100, blank=False, unique=True)
  map = models.CharField(max_length=1000)
  img = models.CharField(max_length=1000)
  address = models.CharField(max_length=400)
  phone = models.CharField(max_length=50)
  instagram = models.CharField(max_length=1000)

  def __str__(self):
    return self.name

class TariffModel(models.Model):
  name = models.CharField(max_length=100, blank=False, unique=True)
  rows = models.JSONField()
  description = models.JSONField()
  fk_club_name = models.ForeignKey(ClubsModel, on_delete=models.CASCADE)

  def __str__(self):
    return self.name

class ComputerSpecModel(models.Model):
  video_card = models.CharField(max_length=200)
  cpu = models.CharField(max_length=200)
  ram = models.CharField(max_length=200)
  monitor = models.CharField(max_length=200)
  mouse = models.CharField(max_length=200)
  keyboard = models.CharField(max_length=200)
  headphones = models.CharField(max_length=200)
  chair = models.CharField(max_length=200)
  fk_tariff_name = models.ForeignKey(TariffModel, on_delete=models.CASCADE)

class QuantityComputersModel(models.Model):
  comfort = models.IntegerField
  vip = models.IntegerField
  bootcamp = models.IntegerField
  ps = models.IntegerField
  fk_club_name = models.ForeignKey(ClubsModel, on_delete=models.CASCADE)

class ClubsFullJsonModel(models.Model):
  club = models.JSONField(unique=True)

