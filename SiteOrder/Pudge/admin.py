from django.contrib import admin
from .models import *

admin.site.register(CustomUser)
admin.site.register(PartnersModel)
admin.site.register(ClubsFullJsonModel)
admin.site.register(OneClubModel)
admin.site.register(ClubsModel)
# admin.site.register(Club2Model)

