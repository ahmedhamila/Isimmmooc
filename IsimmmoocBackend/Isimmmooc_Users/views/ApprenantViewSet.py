from rest_framework import viewsets
from ..serializers.ApprenantSerializer import ApprenantSerializer
from ..models.Apprenant import Apprenant
from rest_framework.authentication import TokenAuthentication
class ApprenantViewSet(viewsets.ModelViewSet):
    serializer_class=ApprenantSerializer
    queryset=Apprenant.objects.all()
    authentication_classes=(TokenAuthentication,)