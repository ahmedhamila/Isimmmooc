from rest_framework import viewsets
from ..serializers.DisciplineSerializer import DisciplineSerializer
from ..models.Discipline import Discipline
from rest_framework.permissions import AllowAny
from rest_framework.authentication import TokenAuthentication
class DisciplineViewSet(viewsets.ModelViewSet):
    serializer_class=DisciplineSerializer
    queryset=Discipline.objects.all()
    permission_classes = [AllowAny]

    
