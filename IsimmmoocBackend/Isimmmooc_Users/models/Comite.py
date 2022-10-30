from unittest.util import _MAX_LENGTH
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Comite (models.Model):
    first_name=models.CharField(max_length=255,null=False,default="Comite first name")
    last_name=models.CharField(max_length=255,null=False,default="Comite last name")
    grade=models.CharField(max_length=255,null=False,blank=True)
    department=models.CharField(max_length=255,null=False,default="Comite Department")
    email=models.EmailField(max_length=255,null=False,blank=True,unique=True)
    phone_number=PhoneNumberField(max_length=12,null=False, blank=False,unique=True,default="")

<<<<<<< HEAD
# Create your models here.

class Comite(models.Model):
    name=models.CharField(max_length=18,null=False,blank=True)
    prenom=models.CharField(max_length=18,null=False,blank=True)
    grade=models.CharField(max_length=12,null=False,blank=True)
    departement=models.CharField(max_length=12,null=False,blank=True)
    password=models.CharField(max_length=15,null=False,blank=True)
    Email=models.EmailField(max_length=12,null=False,blank=True,unique=True)
    phone=PhoneNumberField(max_length=8,null=False, blank=False,unique=True)

    class Meta :
        constraints = [
            models.CheckConstraint(
                check=models.Q(phone__length__gte=8),
                name="%(app_label)s_%(class)s_title_length",
            )
        
    ]
    ordering = ['-name']
    ordering = ['-prenom']
    ordering = ['-grade']
    ordering = ['-departement']
    ordering = ['-password']
    ordering = ['-Email']
    ordering = ['-phone']

=======
   #Methods
    class Meta :
        ordering = ['-first_name']
        ordering = ['-last_name']
        ordering = ['-grade']
        ordering = ['-department']
        ordering = ['-email']
        ordering = ['-phone_number']
>>>>>>> a0d0d785703d030782d4c4b89199564ecea3c649

    def __str__(self):
       return self.first_name + self.last_name
