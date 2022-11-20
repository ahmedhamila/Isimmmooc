from rest_framework import serializers
from ..models.Comite import Comite

class ComiteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comite
        fields=["first_name","last_name","grade","department","email","phone_number"]