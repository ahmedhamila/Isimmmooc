from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
from datetime import datetime
class Apprenant (models.Model):
    first_name = models.CharField(max_length=20, help_text='Nom de l Apprenant')
    last_name = models.CharField(max_length=30, null=False, blank=True,)
    date_of_birth = models.DateField(null=False, blank=True,default=datetime.now)
    mail = models.EmailField(null=False, blank=True,default='' )
    phone_number = PhoneNumberField(null=False, blank=True,default='' )
    class Meta :
        ordering = ['-first_name']
    def __str__(self):
       return self.first_name