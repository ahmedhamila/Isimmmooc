from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from datetime import datetime
from django.contrib.auth.models import User



class PreFormateur (models.Model):
    first_name = models.CharField(max_length=20, help_text='Prenom de Formateur')
    last_name = models.CharField(max_length=30, null=False, blank=True, help_text='Nom de Formateur')
    date_of_birth = models.DateField(null=False, blank=True,default=datetime(2001,12,26) , help_text='Date de naissance de Formateur')
    mail = models.EmailField(null=False, blank=True,default=None , help_text='Email de Formateur')
    phone_number = PhoneNumberField(null=False, blank=True,default=None , help_text='Numero de telephone de Formateur')
    cv = models.ForeignKey('Isimmmooc_Users.FormateurCV',blank=True, null=True,default=None,on_delete=models.CASCADE, help_text='CV de PreFormateur(si existe)')
    image = models.ImageField(blank=True,null=True,upload_to='PreFormateur/')
    accepted = models.BooleanField(default=False)
    organisme = models.ForeignKey('Isimmmooc_Users.Organisme',blank=True, null=True,default=None,on_delete=models.CASCADE, help_text='Organisme de Formateur(si existe)')
    user=models.OneToOneField(User,on_delete=models.CASCADE,null=False,default=None)

    
    class Meta :
        ordering = ['-first_name']
    def __str__(self):
       return self.mail
    
    
