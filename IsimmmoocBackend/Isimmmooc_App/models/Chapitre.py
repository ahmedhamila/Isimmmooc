from django.db import models
from django.core.validators import FileExtensionValidator


class Chapitre (models.Model):
    title = models.CharField(max_length=200, help_text='Titre du chapitre')
    video=models.FileField(upload_to='Chapitre_videos/',null=True,validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])],help_text='Video du chapitre')  
    presentation=models.TextField(max_length=2000,null=False,default=None,help_text='Presentation du chapitre')
    cours=models.ForeignKey('Isimmmooc_App.Cours',related_name='chapitres',null=False, on_delete=models.CASCADE,default=None,help_text='Cours associe')
    #Metadata
    class Meta :
        ordering = ['-title']

    #Methods

    def __str__(self):
        return self.title