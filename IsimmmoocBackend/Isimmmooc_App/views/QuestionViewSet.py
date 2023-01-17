from rest_framework import viewsets
from ..serializers.QuestionSerializer import QuestionSerializer
from ..models.Question import Question
from rest_framework.authentication import TokenAuthentication

class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class=QuestionSerializer
    queryset=Question.objects.all()
    authentication_classes=(TokenAuthentication,)