from django.db import models


class Cour (models.Model):
   name = models.CharField(max_length=20, help_text='Nom de Cour')

   #Metadata
   class Meta :
       ordering = ['-name']

   #Methods

   def __str__(self):
       return self.field