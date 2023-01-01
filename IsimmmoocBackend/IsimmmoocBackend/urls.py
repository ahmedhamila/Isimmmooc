from django.contrib import admin
from django.urls import path,include
from rest_framework_swagger.views import get_swagger_view
from rest_framework.authtoken.views import obtain_auth_token

from django.conf import settings
from django.conf.urls.static import static

schema_view = get_swagger_view(title='isimmmooc')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/',include('Isimmmooc_Users.urls')),
    path('app/',include('Isimmmooc_App.urls')),
    path('auth/',obtain_auth_token),
    path('', schema_view)
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)