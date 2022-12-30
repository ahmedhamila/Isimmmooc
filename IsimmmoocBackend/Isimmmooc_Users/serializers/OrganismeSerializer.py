from rest_framework import serializers
from ..models.Organisme import Organisme

class OrganismeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Organisme
        fields=["name","mail","phone_number","web_site","file_exist","adress"]