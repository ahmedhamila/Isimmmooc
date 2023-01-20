from rest_framework import viewsets
from ..serializers import CoursFullSerializer
from ..models.Cours import Cours
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny
class CoursFullViewSet(viewsets.ModelViewSet):
    serializer_class=CoursFullSerializer
    queryset=Cours.objects.all()
    permission_classes = [AllowAny]