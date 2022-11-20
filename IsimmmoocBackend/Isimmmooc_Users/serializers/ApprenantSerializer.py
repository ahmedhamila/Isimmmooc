from rest_framework import serializers
from ..models.Apprenant import Apprenant

class ApprenantSerializer(serializers.ModelSerializer):
    class Meta:
        model=Apprenant
        fields=["first_name","last_name","date_of_birth","mail","phone_number"]