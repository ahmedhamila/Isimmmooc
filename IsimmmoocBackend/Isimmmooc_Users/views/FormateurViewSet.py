from rest_framework import viewsets
from ..serializers.FormateurSerializer import FormateurSerializer
from ..serializers.FormateurCVSerializer import FormateurCVSerializer
from ..models.Formateur import Formateur
from ..models.FormateurCV import FormateurCV
from ..models.PreFormateur import PreFormateur
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.db import IntegrityError
from .Exceptions import MissingRequiredParameter
from rest_framework.exceptions import APIException
class FormateurViewSet(viewsets.ModelViewSet):
    serializer_class=FormateurSerializer
    queryset=Formateur.objects.all()
    permission_classes = [AllowAny]

    @action(detail=False,methods=['POST'])
    def addPreFormateur(self,request):
        try:
            print(request.data)
            if 'first_name' in request.data :
                first_name=request.data["first_name"]
            else:
                error= "Missing required paramter first_name"
                raise MissingRequiredParameter(error,400)
            if 'last_name' in request.data :
                last_name=request.data["last_name"]
            else:
                error= "Missing required paramter last_name"
                raise MissingRequiredParameter(error,400)
            if 'date_of_birth' in request.data :
                date_of_birth=request.data["date_of_birth"]
            else:
                error= "Missing required paramter date_of_birth"
                raise MissingRequiredParameter(error,400)
            if 'mail' in request.data :
                mail=request.data["mail"]
            else:
                error= "Missing required paramter mail"
                raise MissingRequiredParameter(error,400)
            if 'phone_number' in request.data :
                phone_number=request.data["phone_number"]
            else:
                error= "Missing required paramter phone_number"
                raise MissingRequiredParameter(error,400)
            if 'password' in request.data :
                password=request.data["password"]
            else:
                error= "Missing required paramter password"
                raise MissingRequiredParameter(error,400)
            if 'cv' in request.data :
                cv=request.data["cv"]
            else:
                error= "Missing required paramter CV"
                raise MissingRequiredParameter(error,400)

            newUser=User.objects.create(email=mail,password=make_password(password) ,username=mail,first_name=first_name,last_name=last_name)
            newUser.save()

            newFormateur=PreFormateur.objects.create(first_name=first_name,last_name=last_name,date_of_birth=date_of_birth,mail=mail,phone_number=phone_number,user=newUser,accepted=False)
            newFormateur.cv=FormateurCV.objects.get(id=cv)
            newFormateur.save()

            token = Token.objects.create(user=newUser)
            token.save()
            
            return Response({'Token':token.key},status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response({"message": "Duplicate Entry , email already exists !"}, status=status.HTTP_400_BAD_REQUEST)
        except APIException as error:
            return Response({"message": error.detail}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e :
            return Response({"message": e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
    @action(detail=False,methods=['POST'])
    def createFormateurCV(self,request):
        try:
            
            newCv = FormateurCV.objects.create(cv=request.FILES['cv'])
            newCv.save()
            newCvSer = FormateurCVSerializer(newCv)
            return Response({"CV": newCvSer.data}, status=status.HTTP_201_CREATED)
        except Exception as e :
            return Response({"message": "Error"}, status=status.HTTP_400_BAD_REQUEST)