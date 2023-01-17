from rest_framework import viewsets
from ..serializers.ChapitreSerializer import ChapitreSerializer
from ..models.Chapitre import Chapitre
from rest_framework.authentication import TokenAuthentication

class ChapitreViewSet(viewsets.ModelViewSet):
    serializer_class=ChapitreSerializer
    queryset=Chapitre.objects.all()
    authentication_classes=(TokenAuthentication,)