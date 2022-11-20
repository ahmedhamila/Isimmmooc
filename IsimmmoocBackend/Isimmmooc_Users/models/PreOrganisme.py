from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import User

class PreOrganisme(models.Model):
     #TODO:les attributs approprie pour le model
   name = models.CharField(max_length=20, help_text='Nom de Organisme',null=False,blank=False)
   cours_category=models.CharField(max_length=36,null=False,blank=False)
   email=models.EmailField(max_length = 200,null=False,blank=False)
   phone_number = PhoneNumberField(null=False,blank=False)
   web_site=models.URLField(max_length=200,null=False,blank=False)
   adresse=models.CharField(max_length=200,null=False,blank=False)

   #Metadata
   class Meta :
       ordering = ['-name']

   #Methods

   def __str__(self):
       return self.name