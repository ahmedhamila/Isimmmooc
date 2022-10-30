from django.db import models
from django.core.validators import FileExtensionValidator
class Chapitre (models.Model):
    title = models.CharField(max_length=200, help_text='Titre du chapitre')
    video=models.FileField(upload_to='videos_uploaded/Chapitres',null=True,validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])  
    presentation=models.TextField(max_length=2000,null=False,default="Chapitre Presentation")
    cours=models.ForeignKey('Isimmmooc_App.Cours',null=False, on_delete=models.CASCADE,default="")
    #Metadata
    class Meta :
        ordering = ['-title']

    #Methods

    def __str__(self):
        return self.title