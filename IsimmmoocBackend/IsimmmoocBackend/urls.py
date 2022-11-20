from django.contrib import admin
from django.urls import path,include
from rest_framework_swagger.views import get_swagger_view
from rest_framework.authtoken.views import obtain_auth_token
schema_view = get_swagger_view(title='isimmmooc')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/',include('Isimmmooc_Users.urls')),
    path('app/',include('Isimmmooc_App.urls')),
    path('auth/',obtain_auth_token),
    path('', schema_view)
]
