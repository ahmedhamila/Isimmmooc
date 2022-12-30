from rest_framework import viewsets
from ..serializers.OrganismeSerializer import OrganismeSerializer
from ..models.Organisme import Organisme
from ..models.PreOrganisme import PreOrganisme
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


class OrganismeViewSet(viewsets.ModelViewSet):
    serializer_class=OrganismeSerializer
    queryset=Organisme.objects.all()
    permission_classes = [AllowAny]

    @action(detail=False,methods=['POST'])
    def addPreOrganisme(self,request):
        try:
            print(request.data)
            name=request.data["name"]
            mail=request.data["mail"]
            phone_number=request.data["phone_number"]
            web_site=request.data["web_site"]
            adress=request.data["adress"]

            password=request.data["password"]

            newUser=User.objects.create(email=mail,password=make_password(password) ,username=mail,first_name=name)
            newUser.save()

            newOrganisme=PreOrganisme.objects.create(name=name,mail=mail,phone_number=phone_number,web_site=web_site,adress=adress,user=newUser,accepted=False)
            newOrganisme.save()

            token = Token.objects.create(user=newUser)
            token.save()
            
            return Response({'Token':token.key},status=status.HTTP_201_CREATED)
        except:
            return Response({"message": "All fields are required !!"}, status=status.HTTP_400_BAD_REQUEST)