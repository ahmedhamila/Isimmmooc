from django.urls import path,include
from rest_framework import routers
from .views.CoursViewSet import CoursViewSet
router=routers.DefaultRouter()

router.register("Cours",CoursViewSet)

urlpatterns = [
    path('',include(router.urls))
]