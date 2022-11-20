from rest_framework import viewsets
from ..serializers.PreFormateurSerializer import PreFormateurSerializer
from ..models.PreFormateur import PreFormateur
from rest_framework.authentication import TokenAuthentication
class PreFormateurViewSet(viewsets.ModelViewSet):
    serializer_class=PreFormateurSerializer
    queryset=PreFormateur.objects.all()
    authentication_classes=(TokenAuthentication,)