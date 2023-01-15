from django.urls import path,include
from rest_framework import routers
from .views.CoursViewSet import CoursViewSet
from .views.DisciplineViewSet import DisciplineViewSet
router=routers.DefaultRouter()

router.register("Cours",CoursViewSet)
router.register("Discipline",DisciplineViewSet)

urlpatterns = [
    path('',include(router.urls))
]