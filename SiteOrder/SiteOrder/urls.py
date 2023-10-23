
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api-auth/', include('rest_framework.urls')),
    # path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.urls')),  # auth by email
    path('auth/', include('djoser.urls.jwt')),  # auth by email
    path('auth/', include('rest_framework.urls')),

    # path('auth/', include('SiteOrder.urls'))

    path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('', include('Pudge.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.SITE_URL, document_root=settings.SITE_ROOT)
