from django.urls import path,include
from rest_framework import routers
from .views import CoursViewSet
from .views import DisciplineViewSet
from .views import ChapitreViewSet
from .views import QuestionViewSet
from .views import AnswerViewSet
from .views import CoursFullViewSet
router=routers.DefaultRouter()

router.register("Cours",CoursViewSet)
router.register("Discipline",DisciplineViewSet)
router.register("Chapitre",ChapitreViewSet)
router.register("Question",QuestionViewSet)
router.register("Answer",AnswerViewSet)
router.register("CoursFull",CoursFullViewSet)

urlpatterns = [
    path('',include(router.urls))
]