from rest_framework import serializers
from ..models.Apprenant import Apprenant

class ApprenantSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='username'
     )
    image = serializers.ImageField(max_length = False,allow_empty_file=False,allow_null=False,use_url=True,required=False)
    class Meta:
        model=Apprenant
        fields=["id","first_name","last_name","date_of_birth","mail","phone_number","image","user"]
        depth = 1
    