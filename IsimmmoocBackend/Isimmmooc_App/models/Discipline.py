from django.db import models

class Discipline (models.Model):
    name = models.CharField(max_length=100, help_text='Nom du discipline')
        
    #Metadata
    class Meta :
        ordering = ['-name']

    #Methods

    def __str__(self):
        return self.name