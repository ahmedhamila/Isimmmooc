from rest_framework import serializers

from ..models.Cours import Cours
from .ChapitreFullSerializer import ChapitreFullSerializer
class CoursFullSerializer(serializers.ModelSerializer):
    chapitres = ChapitreFullSerializer(many=True)
    formateur = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='mail'
     )
    discipline = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='name'
     )
    
    class Meta:
        model=Cours
        fields=["id","name","short_video","description","period","difficulty","formateur","discipline","chapitres"]