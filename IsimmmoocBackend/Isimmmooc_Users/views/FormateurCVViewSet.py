from rest_framework import viewsets
from ..serializers import FormateurCVSerializer
from ..models import FormateurCV
from rest_framework.authentication import TokenAuthentication
class FormateurCVViewSet(viewsets.ModelViewSet):
    serializer_class=FormateurCVSerializer
    queryset=FormateurCV.objects.all()
    authentication_classes=(TokenAuthentication,)