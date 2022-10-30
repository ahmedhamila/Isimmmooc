from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
class Formateur (models.Model):
    name = models.CharField(max_length=20, help_text='Nom de Formateur')
    prenom = models.CharField(max_length=30, null=False, blank=True, )
    date_de_naissance = models.DateField(null=False, blank=True, )
    address_mail = models.EmailField(null=False, blank=True, )
    phone_number = PhoneNumberField(null=False, blank=True, )
    password = models.ForeignKey(User, on_delete=models.CASCADE)
    cv = models.FileField(null=False, blank=True)
    nom_entreprise = models.ManyToManyField('Isimmmooc_Users.Organisme', null=True,default="",)

    class Meta :
        ordering = ['-name']
    def __str__(self):
       return self.name