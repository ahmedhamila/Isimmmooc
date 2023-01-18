from rest_framework import serializers
from ..models.Chapitre import Chapitre
from .QuestionFullSerializer import QuestionFullSerializer
class ChapitreFullSerializer(serializers.ModelSerializer):
    questions = QuestionFullSerializer()
    class Meta:
        model=Chapitre
        fields=["id","title","video","presentation","cours","questions"]