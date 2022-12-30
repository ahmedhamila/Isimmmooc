from rest_framework import viewsets
from ..serializers.FormateurSerializer import FormateurSerializer
from ..models.Formateur import Formateur
from ..models.PreFormateur import PreFormateur
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class FormateurViewSet(viewsets.ModelViewSet):
    serializer_class=FormateurSerializer
    queryset=Formateur.objects.all()
    permission_classes = [AllowAny]

    @action(detail=False,methods=['POST'])
    def addPreFormateur(self,request):
        try:
            print(request.data)
            first_name=request.data["first_name"]
            last_name=request.data["last_name"]
            date_of_birth=request.data["date_of_birth"]
            mail=request.data["mail"]
            phone_number=request.data["phone_number"]
            password=request.data["password"]

            newUser=User.objects.create(email=mail,password=make_password(password) ,username=mail,first_name=first_name,last_name=last_name)
            newUser.save()

            newFormateur=PreFormateur.objects.create(first_name=first_name,last_name=last_name,date_of_birth=date_of_birth,mail=mail,phone_number=phone_number,user=newUser,accepted=False)
            newFormateur.save()

            token = Token.objects.create(user=newUser)
            token.save()
            
            return Response({'Token':token.key},status=status.HTTP_201_CREATED)
        except:
            return Response({"message": "All fields are required !!"}, status=status.HTTP_400_BAD_REQUEST)