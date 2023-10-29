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
  quantityComputers = models.JSONField()


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




