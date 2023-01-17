from rest_framework import viewsets
from ..serializers.AnswerSerializer import AnswerSerializer
from ..models.Answer import Answer
from rest_framework.authentication import TokenAuthentication

class AnswerViewSet(viewsets.ModelViewSet):
    serializer_class=AnswerSerializer
    queryset=Answer.objects.all()
    authentication_classes=(TokenAuthentication,)