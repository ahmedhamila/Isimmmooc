from unittest.util import _MAX_LENGTH
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import User
class Comite (models.Model):
    first_name=models.CharField(max_length=255,null=False,default=None, help_text='Prenom du Comite')
    last_name=models.CharField(max_length=255,null=False,default=None, help_text='Nom du Comite')
    grade=models.CharField(max_length=255,null=False,blank=True, help_text='Niveau du Comite')
    department=models.CharField(max_length=255,null=False,default=None, help_text='Departement du Comite')
    email=models.EmailField(max_length=255,null=False,blank=True,unique=True, help_text='Email du Comite')
    phone_number=PhoneNumberField(max_length=12,null=False, blank=False,unique=True,default=None, help_text='Numero de telephone du Comite')
    user=models.OneToOneField(User,on_delete=models.CASCADE,null=False,default=None)
   #Methods
    class Meta :
        ordering = ['-first_name']
        ordering = ['-last_name']
     


    def __str__(self):
       return self.email