from django.contrib.auth import get_user_model
from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_swagger.views import get_swagger_view

from .views import *
from django.conf import settings
from django.conf.urls.static import static
from djoser import views

# router = DefaultRouter()
# router.register("users", views.UserViewSet)
# User = get_user_model()


urlpatterns = [
    path('partners/', PartnersView.as_view({'get': 'list', 'post': 'create'})),
    path('partners/<int:pk>/', PartnersView.as_view({'get': 'list', 'put': 'update', 'delete': 'destroy'})),

    path('set-default-data/', LoadAllClubData.as_view()),

    path('one-club/', OneClubView.as_view()),
    path('one-club/<int:pk>/', OneClubView.as_view()),

    path('clubs/', ClubsView.as_view()),
    path('clubs/<int:pk>/', ClubsView.as_view()),

    # path('reservation/', SendInfoToUserView.as_view()),
    # path('clubs/<int:pk>/', Club2View.as_view()),
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

    path('test/', ActivateView.as_view())
]
# urlpatterns += router.urls

schema_view = get_swagger_view(title='Pastebin API')

url_django_swagger = [
    path('swagger/', schema_view),
]
urlpatterns += url_django_swagger

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)