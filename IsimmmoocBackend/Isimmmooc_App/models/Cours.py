from django.db import models
from django.core.validators import FileExtensionValidator
class Cours (models.Model):
    name = models.CharField(max_length=100, help_text='Nom de Cours')
    short_video=models.FileField(upload_to='videos_uploaded',null=True,validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    description=models.TextField(max_length=2000,null=False,default="Cours Description")
    periode=models.FloatField(null=False,default=1)

    class DifficultyLevel(models.TextChoices):
        BEGINNER = 'BG', ('Beginner')
        INTERMEDIATE = 'MD', ('Intermediate')
        ADVANCED = 'AV', ('Advanced')
        
    difficulte = models.CharField(
        max_length=2,
        choices=DifficultyLevel.choices,
        default=DifficultyLevel.BEGINNER,)

    formateur = models.ForeignKey('Isimmmooc_Users.Formateur', null=False, on_delete=models.CASCADE,default="")
    discipline= models.ForeignKey('Isimmmooc_App.Discipline', null=False, on_delete=models.CASCADE,default="")

    def __str__(self):
       return self.name