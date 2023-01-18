from rest_framework import viewsets
from ..serializers import CoursFullSerializer
from ..models.Cours import Cours
from rest_framework.authentication import TokenAuthentication

class CoursFullViewSet(viewsets.ModelViewSet):
    serializer_class=CoursFullSerializer
    queryset=Cours.objects.all()
    authentication_classes=(TokenAuthentication,)