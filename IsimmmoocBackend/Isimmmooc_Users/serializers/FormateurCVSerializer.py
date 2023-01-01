from rest_framework import serializers
from ..models.FormateurCV import FormateurCV

class FormateurCVSerializer(serializers.ModelSerializer):
    class Meta:
        model=FormateurCV
        fields=['id','cv']