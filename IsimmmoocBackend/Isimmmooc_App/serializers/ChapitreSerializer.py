from rest_framework import serializers
from ..models.Chapitre import Chapitre
class ChapitreSerializer(serializers.ModelSerializer):
    class Meta:
        model=Chapitre
        fields=["id","title","video","presentation","cours"]