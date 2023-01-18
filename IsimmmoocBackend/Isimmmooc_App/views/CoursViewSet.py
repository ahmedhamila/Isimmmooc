from rest_framework import viewsets
from ..serializers.CoursSerializer import CoursSerializer
from ..models.Cours import Cours
from ..models.Discipline import Discipline
from Isimmmooc_Users.models.Formateur import Formateur
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.response import Response

class CoursViewSet(viewsets.ModelViewSet):
    serializer_class=CoursSerializer
    queryset=Cours.objects.all()
    authentication_classes=(TokenAuthentication,)

    def create(self, request, *args, **kwargs):
        try :
            data = request.data
            name = data['name']
            short_video = request.FILES['short_video']
            description = data['description']
            period = data['period']
            difficulty = data['difficulty']
            discipline = Discipline.objects.get(name=data['discipline']) 
            user=Formateur.objects.get(user=request.user)
            newCours=Cours.objects.create(name=name,short_video=short_video,description=description,period=period,difficulty=difficulty,discipline=discipline,formateur=user)
            newCours.save()
            CoursSerialized = CoursSerializer(newCours)
            return Response(CoursSerialized.data,status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"message": e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
            
    
