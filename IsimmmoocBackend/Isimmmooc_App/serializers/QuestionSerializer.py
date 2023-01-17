from rest_framework import serializers
from ..models.Question import Question
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Question
        fields=["id","question_text","number_options","chapitre"]