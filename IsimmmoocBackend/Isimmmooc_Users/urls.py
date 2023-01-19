from django.urls import path,include
from rest_framework import routers
from .views import ApprenantViewSet
from .views import ComiteViewSet
from .views import OrganismeViewSet
from .views import PreOrganismeViewSet
from .views import FormateurViewSet
from .views import FormateurCVViewSet
from .views import PreFormateurViewSet
from .views import UserViewSet

router=routers.DefaultRouter()

router.register("User",UserViewSet)
router.register("Apprenant",ApprenantViewSet)
router.register("Comite",ComiteViewSet)
router.register("Organisme",OrganismeViewSet)
router.register("PreOrganisme",PreOrganismeViewSet)
router.register("Formateur",FormateurViewSet)
router.register("FormateurCV",FormateurCVViewSet)
router.register("PreFormateur",PreFormateurViewSet)

urlpatterns = [
    path('',include(router.urls))
]