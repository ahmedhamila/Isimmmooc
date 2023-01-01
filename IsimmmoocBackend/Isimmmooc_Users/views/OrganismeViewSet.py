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
from .Exceptions import MissingRequiredParameter
from django.db import IntegrityError
from .Exceptions import MissingRequiredParameter
from rest_framework.exceptions import APIException
class OrganismeViewSet(viewsets.ModelViewSet):
    serializer_class=OrganismeSerializer
    queryset=Organisme.objects.all()
    permission_classes = [AllowAny]

    @action(detail=False,methods=['POST'])
    def addPreOrganisme(self,request):
        try:
            print(request.data)
            if 'name' in request.data :
                name=request.data["name"]
            else:
                error= "Missing required paramter first_name"
                raise MissingRequiredParameter(error,400)
            if 'mail' in request.data :
                mail=request.data["mail"]
            else:
                error= "Missing required paramter first_name"
                raise MissingRequiredParameter(error,400)
            if 'phone_number' in request.data :
                phone_number=request.data["phone_number"]
            else:
                error= "Missing required paramter first_name"
                raise MissingRequiredParameter(error,400)
            if 'web_site' in request.data :
                web_site=request.data["web_site"]
            else:
                error= "Missing required paramter first_name"
                raise MissingRequiredParameter(error,400)
            if 'adress' in request.data :
                adress=request.data["adress"]
            else:
                error= "Missing required paramter first_name"
                raise MissingRequiredParameter(error,400)
            if 'password' in request.data :
                password=request.data["password"]
            else:
                error= "Missing required paramter first_name"
                raise MissingRequiredParameter(error,400)

            newUser=User.objects.create(email=mail,password=make_password(password) ,username=mail,first_name=name)
            newUser.save()

            newOrganisme=PreOrganisme.objects.create(name=name,mail=mail,phone_number=phone_number,web_site=web_site,adress=adress,user=newUser,accepted=False)
            newOrganisme.save()

            token = Token.objects.create(user=newUser)
            token.save()
            
            return Response({'Token':token.key},status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response({"message": "Duplicate Entry , email already exists !"}, status=status.HTTP_400_BAD_REQUEST)
        except APIException as error:
            return Response({"message": error.detail}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e :
            return Response({"message": e.__str__()}, status=status.HTTP_400_BAD_REQUEST)