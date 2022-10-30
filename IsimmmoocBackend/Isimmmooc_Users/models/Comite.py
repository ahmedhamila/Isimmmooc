from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Comite (models.Model):
    first_name=models.CharField(max_length=255,null=False,default="Comite first name")
    last_name=models.CharField(max_length=255,null=False,default="Comite last name")
    grade=models.CharField(max_length=255,null=False,blank=True)
    department=models.CharField(max_length=255,null=False,default="Comite Department")
    email=models.EmailField(max_length=255,null=False,blank=True,unique=True)
    phone_number=PhoneNumberField(max_length=12,null=False, blank=False,unique=True,default="")

   #Methods
    class Meta :
        ordering = ['-first_name']
        ordering = ['-last_name']
        ordering = ['-grade']
        ordering = ['-department']
        ordering = ['-email']
        ordering = ['-phone_number']

    def __str__(self):
       return self.first_name + self.last_name
