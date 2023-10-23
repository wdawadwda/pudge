from django.urls import path
from rest_framework_swagger.views import get_swagger_view
from .views import *

urlpatterns = [
  path('partners/', PartnersView.as_view({'get': 'list', 'post': 'create'})),
  path('partners/<int:pk>/', PartnersView.as_view({'get': 'list', 'put': 'update', 'delete': 'destroy'})),

  path('clubs/', ClubsView.as_view({'get': 'list', 'post': 'create'})),
  path('clubs/<int:pk>/', ClubsView.as_view({'get': 'list', 'put': 'update', 'delete': 'destroy'})),

  path('tariffs/', TariffView.as_view({'get': 'list', 'post': 'create'})),
  path('tariffs/<int:pk>/', TariffView.as_view({'get': 'list', 'put': 'update', 'delete': 'destroy'})),

  path('computer-spec/', ComputerSpecView.as_view({'get': 'list', 'post': 'create'})),
  path('computer-spec/<int:pk>/', ComputerSpecView.as_view({'get': 'list', 'put': 'update', 'delete': 'destroy'})),

  path('quantity-computers/', QuantityComputersView.as_view({'get': 'list', 'post': 'create'})),
  path('quantity-computers/<int:pk>/', QuantityComputersView.as_view({'get': 'list', 'put': 'update', 'delete': 'destroy'})),

  path('collect-full-clubs-json/', CollectFullJsonView.as_view({'get': 'list'})),

  path('get-full-clubs-json/', GetFullJsonView.as_view({'get': 'list'})),

  path('set-default-data/', LoadAllClubData.as_view()),

]

schema_view = get_swagger_view(title='Pastebin API')

url_django_swagger = [
    path('swagger/', schema_view),
]
urlpatterns += url_django_swagger
