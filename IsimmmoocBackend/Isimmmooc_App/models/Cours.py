from django.db import models
from django.core.validators import FileExtensionValidator

class Cours (models.Model):
    name = models.CharField(max_length=100, help_text='Nom de Cours')
    short_video=models.FileField(upload_to='Cours_videos/',null=True,validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])],help_text='Short Video du Cours')
    description=models.TextField(max_length=2000,null=False,default=None,help_text='Description du Cours')
    period=models.FloatField(null=False,default=1,help_text='Periode du Cours(en Heure)')

    class DifficultyLevel(models.TextChoices):
        BEGINNER = 'BG', ('Beginner')
        INTERMEDIATE = 'MD', ('Intermediate')
        ADVANCED = 'AV', ('Advanced')
        
    difficulty = models.CharField(
        max_length=2,
        choices=DifficultyLevel.choices,
        default=DifficultyLevel.BEGINNER,help_text='Difficulte du chapitre')

    formateur = models.ForeignKey('Isimmmooc_Users.Formateur', null=False, on_delete=models.CASCADE,default=None,help_text='Formateur du Cours')
    discipline= models.ForeignKey('Isimmmooc_App.Discipline', null=False, on_delete=models.CASCADE,default=None,help_text='Discipline du Cours')

    def __str__(self):
       return self.name