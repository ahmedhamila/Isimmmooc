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
            isFormateur = Formateur.objects.filter(mail=tokenUser)
            isOrganisme = Organisme.objects.filter(mail=tokenUser)
            isPreFormateur = PreFormateur.objects.filter(mail=tokenUser)
            isPreOrganisme = PreOrganisme.objects.filter(mail=tokenUser)

            tokenUserSerialized=UserSerializer(tokenUser)
            if isApprenant :
                userType='Apprenant'
                tokenUserSerialized = ApprenantSerializer(Apprenant.objects.get(mail=isApprenant.values()[0]['mail']) , context={'request': request})
            elif isFormateur :
                userType='Formateur'
                tokenUserSerialized = FormateurSerializer(Formateur.objects.get(mail =isFormateur.values()[0]['mail']),context={'request': request})
            elif isOrganisme :
                userType='Organisme'
                tokenUserSerialized = OrganismeSerializer(Organisme.objects.get(mail =isOrganisme.values()[0]['mail']),context={'request': request})
            elif isPreFormateur :
                userType='PreFormateur'
                tokenUserSerialized = PreFormateurSerializer(PreFormateur.objects.get(mail =isPreFormateur.values()[0]['mail']),context={'request': request})
            elif isPreOrganisme :
                userType='PreOrganisme'
                tokenUserSerialized = PreOrganismeSerializer(PreOrganisme.objects.get(mail =isPreOrganisme.values()[0]['mail']),context={'request': request})
            return Response({'Token':requestToken,'UserType':userType,'user':tokenUserSerialized.data},status=status.HTTP_200_OK)
        except:
            return Response({"message": "Errorrr"}, status=status.HTTP_400_BAD_REQUEST)