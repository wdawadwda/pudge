from django.db import router
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_swagger.views import get_swagger_view

from .views import *
from django.conf import settings
from django.conf.urls.static import static

schema_view = get_schema_view(
    openapi.Info(
        title="API",
        default_version="v1",
        description="API Documentation",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('partners/', PartnersView.as_view({'get': 'list', 'post': 'create'})),
    path('partners/<int:pk>/', PartnersView.as_view({'get': 'list', 'put': 'update', 'delete': 'destroy'})),

    path('set-default-data/', LoadAllClubData.as_view()),

    path('one-club/', OneClubView.as_view()),
    path('one-club/<int:pk>/', OneClubView.as_view()),

    path('clubs/', ClubsView.as_view()),
    path('clubs/<int:pk>/', ClubsView.as_view()),

    path('new-club-test/', NewClubTestView.as_view()),

    path('collect_club/', CollectClubView.as_view()),
    path('collect_club/<int:pk>/', CollectClubView.as_view()),

    path('gallery-updated/', GalleryUpdatedView.as_view()),
    path('gallery-updated/<int:pk>/', GalleryUpdatedView.as_view()),

    path('news/', NewsView.as_view()),
    path('news/<int:pk>/', NewsView.as_view()),
    path('news-count/', AllNewsView.as_view()),

    path('reservation/', ReservationView.as_view()),

    path('get-clubs/', GetClubsNameView.as_view()),

    path('main-map/', MainMapView.as_view()),

    path('activate/<str:uid>/<str:token>', ActivateView.as_view()),

    path('swagger/', schema_view.with_ui('swagger'), name='swagger'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)