from django.db import models
from django.core.validators import FileExtensionValidator
class Chapitre (models.Model):
    titre = models.CharField(max_length=200, help_text='Titre du chapitre')
    video=models.FileField(upload_to='videos_uploaded/Chapitres',null=True,validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])  
    presentation=models.TextField(max_length=2000,null=False,default="Chapitre Presentation")
    #Metadata
    class Meta :
        ordering = ['-titre']

    #Methods

    def __str__(self):
        return self.titre