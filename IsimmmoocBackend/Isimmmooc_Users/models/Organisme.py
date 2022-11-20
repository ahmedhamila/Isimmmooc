from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Organisme(models.Model):
     #TODO:les attributs approprie pour le model
   name = models.CharField(max_length=20, help_text='Nom de Organisme',null=False,blank=True)
   email=models.EmailField(max_length = 200,null=False,blank=True)
   phone_number = PhoneNumberField(null=False,blank=True)
   web_site=models.URLField(max_length=200,null=False,blank=True)
   file_exist=models.FileField(null=False,blank=True)

   #Metadata
   class Meta :
       ordering = ['-name']

   #Methods

   def __str__(self):
       return self.name