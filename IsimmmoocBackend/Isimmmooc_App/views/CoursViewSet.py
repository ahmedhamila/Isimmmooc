from rest_framework import viewsets
from ..serializers.CoursSerializer import CoursSerializer
from ..models.Cours import Cours
from ..models.Discipline import Discipline
from Isimmmooc_Users.models import Formateur
from Isimmmooc_Users.models import Apprenant
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
            CoursSerialized = CoursSerializer(newCours,context={'request': request})
            return Response(CoursSerialized.data,status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"message": e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
    @action(detail=False,methods=['GET'])
    def getCoursByFormateur(self,request):
        try :
            user = request.user
            userFormateur = Formateur.objects.get(user=user)
            FormateurCourses = Cours.objects.filter(formateur = userFormateur)
            FormateurCoursesSerialized = CoursSerializer(FormateurCourses,many=True,context={'request': request})
            return Response(FormateurCoursesSerialized.data,status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"message": e.__str__()}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False,methods=['POST'])
    def registerCourse(self,request):
        try:
            apprenant = Apprenant.objects.get(user=request.user) 
            print(apprenant)
            course= Cours.objects.get(id=request.data['id']) 
            print(course)
            apprenant.registered_courses.add(course)
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"message": e.__str__()}, status=status.HTTP_400_BAD_REQUEST)
            
    
