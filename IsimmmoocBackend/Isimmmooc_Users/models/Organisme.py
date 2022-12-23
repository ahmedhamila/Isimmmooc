from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import User
class Organisme(models.Model):
    name = models.CharField(max_length=20,null=False,blank=True, help_text='Nom de l Organisme')
    email=models.EmailField(max_length = 200,null=False,blank=True, help_text='Email de l Organisme')
    phone_number = PhoneNumberField(null=False,blank=True, help_text='Numero de telephone de l Organisme')
    web_site=models.URLField(max_length=200,null=False,blank=True, help_text='Web Site de l Organisme')
    file_exist=models.FileField(null=True,blank=True,upload_to='Uploaded_files/Organisme_files', help_text='File Exist de l Organisme')
    adress=models.CharField(max_length=200,null=False,blank=False, help_text='Adresse de l Organisme')
    user=models.OneToOneField(User,on_delete=models.CASCADE,null=False,default=None)
    #Metadata
    class Meta :
        ordering = ['-name']

    #Methods

    def __str__(self):
        return self.name