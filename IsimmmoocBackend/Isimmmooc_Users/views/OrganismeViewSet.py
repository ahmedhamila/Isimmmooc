from rest_framework import viewsets
from ..serializers.OrganismeSerializer import OrganismeSerializer
from ..models.Organisme import Organisme
from rest_framework.authentication import TokenAuthentication
class OrganismeViewSet(viewsets.ModelViewSet):
    serializer_class=OrganismeSerializer
    queryset=Organisme.objects.all()
    authentication_classes=(TokenAuthentication,)