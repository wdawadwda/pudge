from django.urls import path
from rest_framework_swagger.views import get_swagger_view
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('partners/', PartnersView.as_view({'get': 'list', 'post': 'create'})),
    path('partners/<int:pk>/', PartnersView.as_view({'get': 'list', 'put': 'update', 'delete': 'destroy'})),

    path('set-default-data/', LoadAllClubData.as_view()),

    path('one-club/', OneClubView.as_view()),
    path('one-club/<int:pk>/', OneClubView.as_view()),

    path('clubs/', ClubsView.as_view()),
    path('clubs/<int:pk>/', ClubsView.as_view()),

    # path('clubs/', Club2View.as_view()),
    # path('clubs/<int:pk>/', Club2View.as_view()),

]

schema_view = get_swagger_view(title='Pastebin API')

url_django_swagger = [
    path('swagger/', schema_view),
]
urlpatterns += url_django_swagger

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)