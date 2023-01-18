from rest_framework import serializers
from ..models.Formateur import Formateur

class FormateurSerializer(serializers.ModelSerializer):
    class Meta:
        model=Formateur
        fields=["id","first_name","last_name","date_of_birth","mail","phone_number","cv","organisme","image"]