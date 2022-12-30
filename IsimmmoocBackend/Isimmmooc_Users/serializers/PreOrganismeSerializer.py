from rest_framework import serializers
from ..models.PreOrganisme import PreOrganisme

class PreOrganismeSerializer(serializers.ModelSerializer):
    class Meta:
        model=PreOrganisme
        fields=["name","mail","phone_number","web_site","adress","accepted"]