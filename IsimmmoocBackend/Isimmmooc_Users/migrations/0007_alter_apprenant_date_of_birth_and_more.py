# Generated by Django 4.1.2 on 2022-11-22 10:25

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Isimmmooc_Users', '0006_apprenant_user_comite_user_formateur_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apprenant',
            name='date_of_birth',
            field=models.DateField(blank=True, default=datetime.datetime(2001, 12, 26, 0, 0), help_text='Date de naissance de l Apprenant'),
        ),
        migrations.AlterField(
            model_name='apprenant',
            name='first_name',
            field=models.CharField(help_text='Prenom de l Apprenant', max_length=20),
        ),
        migrations.AlterField(
            model_name='apprenant',
            name='last_name',
            field=models.CharField(blank=True, help_text='Nom de l Apprenant', max_length=30),
        ),
        migrations.AlterField(
            model_name='apprenant',
            name='mail',
            field=models.EmailField(blank=True, default=None, help_text='Email de l Apprenant', max_length=254),
        ),
        migrations.AlterField(
            model_name='apprenant',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, default=None, help_text='Numero de Telephone de l Apprenant', max_length=128, region=None),
        ),
        migrations.AlterField(
            model_name='apprenant',
            name='user',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='comite',
            name='department',
            field=models.CharField(default=None, help_text='Departement du Comite', max_length=255),
        ),
        migrations.AlterField(
            model_name='comite',
            name='email',
            field=models.EmailField(blank=True, help_text='Email du Comite', max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='comite',
            name='first_name',
            field=models.CharField(default=None, help_text='Prenom du Comite', max_length=255),
        ),
        migrations.AlterField(
            model_name='comite',
            name='grade',
            field=models.CharField(blank=True, help_text='Niveau du Comite', max_length=255),
        ),
        migrations.AlterField(
            model_name='comite',
            name='last_name',
            field=models.CharField(default=None, help_text='Nom du Comite', max_length=255),
        ),
        migrations.AlterField(
            model_name='comite',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(default=None, help_text='Numero de telephone du Comite', max_length=12, region=None, unique=True),
        ),
        migrations.AlterField(
            model_name='comite',
            name='user',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='formateur',
            name='cv',
            field=models.FileField(blank=True, help_text='CV de Formateur', upload_to=''),
        ),
        migrations.AlterField(
            model_name='formateur',
            name='date_of_birth',
            field=models.DateField(blank=True, default=datetime.datetime(2001, 12, 26, 0, 0), help_text='Date de naissance de Formateur'),
        ),
        migrations.AlterField(
            model_name='formateur',
            name='first_name',
            field=models.CharField(help_text='Prenom de Formateur', max_length=20),
        ),
        migrations.AlterField(
            model_name='formateur',
            name='last_name',
            field=models.CharField(blank=True, help_text='Nom de Formateur', max_length=30),
        ),
        migrations.AlterField(
            model_name='formateur',
            name='mail',
            field=models.EmailField(blank=True, default=None, help_text='Email de Formateur', max_length=254),
        ),
        migrations.AlterField(
            model_name='formateur',
            name='organisme',
            field=models.ForeignKey(default=None, help_text='Organisme de Formateur(si existe)', null=True, on_delete=django.db.models.deletion.CASCADE, to='Isimmmooc_Users.organisme'),
        ),
        migrations.AlterField(
            model_name='formateur',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, default=None, help_text='Numero de telephone de Formateur', max_length=128, region=None),
        ),
        migrations.AlterField(
            model_name='formateur',
            name='user',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='organisme',
            name='email',
            field=models.EmailField(blank=True, help_text='Email de l Organisme', max_length=200),
        ),
        migrations.AlterField(
            model_name='organisme',
            name='file_exist',
            field=models.FileField(blank=True, help_text='File Exist de l Organisme', upload_to=''),
        ),
        migrations.AlterField(
            model_name='organisme',
            name='name',
            field=models.CharField(blank=True, help_text='Nom de l Organisme', max_length=20),
        ),
        migrations.AlterField(
            model_name='organisme',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, help_text='Numero de telephone de l Organisme', max_length=128, region=None),
        ),
        migrations.AlterField(
            model_name='organisme',
            name='user',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='organisme',
            name='web_site',
            field=models.URLField(blank=True, help_text='Web Site de l Organisme'),
        ),
    ]