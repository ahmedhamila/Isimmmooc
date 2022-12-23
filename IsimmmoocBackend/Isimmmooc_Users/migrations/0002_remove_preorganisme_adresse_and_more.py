# Generated by Django 4.1.2 on 2022-12-23 11:45

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Isimmmooc_Users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='preorganisme',
            name='adresse',
        ),
        migrations.RemoveField(
            model_name='preorganisme',
            name='cours_category',
        ),
        migrations.AddField(
            model_name='preformateur',
            name='user',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='preorganisme',
            name='accepted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='preorganisme',
            name='adress',
            field=models.CharField(default='', help_text='Adresse de l Organisme', max_length=200),
        ),
        migrations.AddField(
            model_name='preorganisme',
            name='file_exist',
            field=models.FileField(blank=True, help_text='File Exist de l Organisme', null=True, upload_to='Uploaded_files/Organisme_files'),
        ),
        migrations.AddField(
            model_name='preorganisme',
            name='user',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='organisme',
            name='file_exist',
            field=models.FileField(blank=True, help_text='File Exist de l Organisme', null=True, upload_to='Uploaded_files/Organisme_files'),
        ),
        migrations.AlterField(
            model_name='preformateur',
            name='accepted',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='preformateur',
            name='cv',
            field=models.FileField(blank=True, help_text='CV de Formateur', upload_to=''),
        ),
        migrations.AlterField(
            model_name='preformateur',
            name='date_of_birth',
            field=models.DateField(blank=True, default=datetime.datetime(2001, 12, 26, 0, 0), help_text='Date de naissance de Formateur'),
        ),
        migrations.AlterField(
            model_name='preformateur',
            name='first_name',
            field=models.CharField(help_text='Prenom de Formateur', max_length=20),
        ),
        migrations.AlterField(
            model_name='preformateur',
            name='last_name',
            field=models.CharField(blank=True, help_text='Nom de Formateur', max_length=30),
        ),
        migrations.AlterField(
            model_name='preformateur',
            name='mail',
            field=models.EmailField(blank=True, default=None, help_text='Email de Formateur', max_length=254),
        ),
        migrations.AlterField(
            model_name='preformateur',
            name='organisme',
            field=models.ForeignKey(default=None, help_text='Organisme de Formateur(si existe)', null=True, on_delete=django.db.models.deletion.CASCADE, to='Isimmmooc_Users.organisme'),
        ),
        migrations.AlterField(
            model_name='preformateur',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, default=None, help_text='Numero de telephone de Formateur', max_length=128, region=None),
        ),
        migrations.AlterField(
            model_name='preorganisme',
            name='email',
            field=models.EmailField(blank=True, help_text='Email de l Organisme', max_length=200),
        ),
        migrations.AlterField(
            model_name='preorganisme',
            name='name',
            field=models.CharField(blank=True, help_text='Nom de l Organisme', max_length=20),
        ),
        migrations.AlterField(
            model_name='preorganisme',
            name='phone_number',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, help_text='Numero de telephone de l Organisme', max_length=128, region=None),
        ),
        migrations.AlterField(
            model_name='preorganisme',
            name='web_site',
            field=models.URLField(blank=True, help_text='Web Site de l Organisme'),
        ),
    ]
