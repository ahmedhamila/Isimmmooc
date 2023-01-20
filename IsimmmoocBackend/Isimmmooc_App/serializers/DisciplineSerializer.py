from rest_framework import serializers
from ..models.Discipline import Discipline
class DisciplineSerializer(serializers.ModelSerializer):
    class Meta:
        model=Discipline
        fields=["id","name"]