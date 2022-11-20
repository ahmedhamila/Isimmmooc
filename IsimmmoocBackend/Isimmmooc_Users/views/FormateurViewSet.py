from rest_framework import viewsets
from ..serializers.FormateurSerializer import FormateurSerializer
from ..models.Formateur import Formateur
from rest_framework.authentication import TokenAuthentication
class FormateurViewSet(viewsets.ModelViewSet):
    serializer_class=FormateurSerializer
    queryset=Formateur.objects.all()
    authentication_classes=(TokenAuthentication,)