from rest_framework import viewsets
from ..serializers.ComiteSerializer import ComiteSerializer
from ..models.Comite import Comite
from rest_framework.authentication import TokenAuthentication
class ComiteViewSet(viewsets.ModelViewSet):
    serializer_class=ComiteSerializer
    queryset=Comite.objects.all()
    authentication_classes=(TokenAuthentication,)