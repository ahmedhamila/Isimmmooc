from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from datetime import datetime
class Formateur (models.Model):
    first_name = models.CharField(max_length=20, help_text='Nom de Formateur')
    last_name = models.CharField(max_length=30, null=False, blank=True, )
    date_of_birth = models.DateField(null=False, blank=True,default=datetime.now )
    mail = models.EmailField(null=False, blank=True,default=datetime.now )
    phone_number = PhoneNumberField(null=False, blank=True,default="" )
    cv = models.FileField(null=False, blank=True)
    organisme = models.ForeignKey('Isimmmooc_Users.Organisme', null=True,default="",on_delete=models.CASCADE)

    class Meta :
        ordering = ['-first_name']
    def __str__(self):
       return self.first_name+" "+self.last_name
