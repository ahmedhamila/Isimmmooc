from rest_framework import serializers
from ..models.Organisme import Organisme

class OrganismeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Organisme
        fields=["name","cours_category","email","phone_number","web_site","file_exist","adresse"]