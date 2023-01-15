from rest_framework import serializers
from ..models.Cours import Cours
class CoursSerializer(serializers.ModelSerializer):
    class Meta:
        model=Cours
        fields=["id","name","short_video","description","period","difficulty","formateur","discipline"]