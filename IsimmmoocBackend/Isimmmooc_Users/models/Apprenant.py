from django.db import models


class Apprenant (models.Model):
    #TODO:les attributs approprie pour le model
   name = models.CharField(max_length=20, help_text='Nom de l Apprenant')

   #Metadata
   class Meta :
       ordering = ['-name']

   #Methods

   def __str__(self):
       return self.name