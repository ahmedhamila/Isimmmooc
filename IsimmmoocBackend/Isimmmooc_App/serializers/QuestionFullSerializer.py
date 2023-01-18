from rest_framework import serializers
from ..models.Question import Question
from .AnswerSerializer import AnswerSerializer
class QuestionFullSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True)
    class Meta:
        model=Question
        fields=["id","question_text","number_options","chapitre","answers"]