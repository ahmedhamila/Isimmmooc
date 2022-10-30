from unittest.util import _MAX_LENGTH
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


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


    def __str__(self):
       return self.name
