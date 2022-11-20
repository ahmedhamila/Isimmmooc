from rest_framework import viewsets
from ..serializers.CoursSerializer import CoursSerializer
from ..models.Cours import Cours
from rest_framework.authentication import TokenAuthentication
class CoursViewSet(viewsets.ModelViewSet):
    serializer_class=CoursSerializer
    queryset=Cours.objects.all()
    authentication_classes=(TokenAuthentication,)
