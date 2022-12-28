from rest_framework import serializers
from ..models.Apprenant import Apprenant

class ApprenantSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='username'
     )
    class Meta:
        model=Apprenant
        fields=["first_name","last_name","date_of_birth","mail","phone_number","user"]
        depth = 1
    