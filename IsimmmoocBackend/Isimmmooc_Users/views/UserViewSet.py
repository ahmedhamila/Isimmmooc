from rest_framework import viewsets
from ..serializers.UserSerializer import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from ..models.Apprenant import Apprenant
from ..models.Formateur import Formateur
from ..models.Organisme import Organisme
from ..models.PreFormateur import PreFormateur
from ..models.PreOrganisme import PreOrganisme

from ..serializers.ApprenantSerializer import ApprenantSerializer
from ..serializers.FormateurSerializer import FormateurSerializer
from ..serializers.OrganismeSerializer import OrganismeSerializer
from ..serializers.PreFormateurSerializer import PreFormateurSerializer
from ..serializers.PreOrganismeSerializer import PreOrganismeSerializer

import json
class UserViewSet(viewsets.ModelViewSet):
    serializer_class=UserSerializer
    queryset=User.objects.all()
    permission_classes = [AllowAny]


    @action(detail=False,methods=['POST'])
    def getUser(self,request):
        try:
            userType=''
            requestToken=request.data['Token']
            tokenUser = Token.objects.get(key=requestToken).user

            isApprenant = Apprenant.objects.filter(mail=tokenUser)
            print(isApprenant)
            isFormateur = Formateur.objects.filter(mail=tokenUser)
            print(isFormateur)
            isOrganisme = Organisme.objects.filter(mail=tokenUser)
            print(isOrganisme)
            isPreFormateur = PreFormateur.objects.filter(mail=tokenUser)
            print(isPreFormateur)
            isPreOrganisme = PreOrganisme.objects.filter(mail=tokenUser)
            print(isPreOrganisme)
            tokenUserSerialized=UserSerializer(tokenUser)
            if isApprenant :
                userType='Apprenant'
                tokenUserSerialized = ApprenantSerializer(isApprenant.values()[0])
            elif isFormateur :
                userType='Formateur'
                tokenUserSerialized = FormateurSerializer(isFormateur.values()[0])
            elif isOrganisme :
                userType='Organisme'
                tokenUserSerialized = OrganismeSerializer(isOrganisme.values()[0])
            elif isPreFormateur :
                userType='PreFormateur'
                tokenUserSerialized = PreFormateurSerializer(isPreFormateur.values()[0])
            elif isPreOrganisme :
                userType='PreOrganisme'
                tokenUserSerialized = PreOrganismeSerializer(isPreOrganisme.values()[0])
            print(tokenUserSerialized)
            return Response({'Token':requestToken,'UserType':userType,'user':tokenUserSerialized.data},status=status.HTTP_201_CREATED)
        except:
            return Response({"message": "Errorrr"}, status=status.HTTP_400_BAD_REQUEST)