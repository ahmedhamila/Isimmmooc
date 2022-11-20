from django.urls import path,include
from rest_framework import routers
from .views.ApprenantViewSet import ApprenantViewSet
from .views.ComiteViewSet import ComiteViewSet
from .views.OrganismeViewSet import OrganismeViewSet
from .views.FormateurViewSet import FormateurViewSet
router=routers.DefaultRouter()

router.register("Apprenant",ApprenantViewSet)
router.register("Comite",ComiteViewSet)
router.register("Organisme",OrganismeViewSet)
router.register("Formateur",FormateurViewSet)

urlpatterns = [
    path('',include(router.urls))
]