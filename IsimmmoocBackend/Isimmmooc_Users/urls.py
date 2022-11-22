from django.urls import path,include
from rest_framework import routers
from .views.ApprenantViewSet import ApprenantViewSet
from .views.ComiteViewSet import ComiteViewSet
from .views.OrganismeViewSet import OrganismeViewSet
from .views.PreOrganismeViewSet import PreOrganismeViewSet
from .views.FormateurViewSet import FormateurViewSet
from .views.PreFormateurViewSet import PreFormateurViewSet

router=routers.DefaultRouter()

router.register("Apprenant",ApprenantViewSet)
router.register("Comite",ComiteViewSet)
router.register("Organisme",OrganismeViewSet)
router.register("PreOrganisme",PreOrganismeViewSet)
router.register("Formateur",FormateurViewSet)
router.register("PreFormateur",PreFormateurViewSet)

urlpatterns = [
    path('',include(router.urls))
]