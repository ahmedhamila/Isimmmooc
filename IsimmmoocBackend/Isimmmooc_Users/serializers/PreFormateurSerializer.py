from rest_framework import serializers
from ..models.PreFormateur import PreFormateur

class PreFormateurSerializer(serializers.ModelSerializer):
    class Meta:
        model=PreFormateur
        fields=["id","first_name","last_name","date_of_birth","mail","phone_number","cv","accepted","organisme","image"]