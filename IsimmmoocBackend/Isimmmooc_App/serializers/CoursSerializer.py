from rest_framework import serializers
from ..models.Cours import Cours
class CoursSerializer(serializers.ModelSerializer):
    formateur = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='mail'
     )
    formateurImg =serializers.ImageField(source='formateur.image')

    discipline = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='name'
     )
    class Meta:
        model=Cours
        fields=["id","name","short_video","description","period","difficulty","formateur","formateurImg","discipline"]