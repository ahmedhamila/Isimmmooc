from rest_framework import viewsets
from ..serializers.PreOrganismeSerializer import PreOrganismeSerializer
from ..models.PreOrganisme import PreOrganisme
from rest_framework.authentication import TokenAuthentication
class PreOrganismeViewSet(viewsets.ModelViewSet):
    serializer_class=PreOrganismeSerializer
    queryset=PreOrganisme.objects.all()
    authentication_classes=(TokenAuthentication,)