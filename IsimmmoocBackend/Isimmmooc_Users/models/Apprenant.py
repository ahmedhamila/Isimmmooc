from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField

class Apprenant (models.Model):
    name = models.CharField(max_length=20, help_text='Nom de l Apprenant')
    prenom = models.CharField(max_length=30, null=False, blank=True,)
    date_de_naissance = models.DateField(null=False, blank=True)
    address_mail = models.EmailField(null=False, blank=True, )
    phone_number = PhoneNumberField(null=False, blank=True, )
    password = models.ForeignKey(User, on_delete=models.CASCADE)
    class Meta :
        ordering = ['-name']
    def __str__(self):
       return self.name