from rest_framework import serializers
from ..models.Answer import Answer
class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Answer
        fields=["answer_text","question","correct"]