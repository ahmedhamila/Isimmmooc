# Generated by Django 4.1.2 on 2023-01-15 21:05

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Isimmmooc_App', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chapitre',
            name='video',
            field=models.FileField(help_text='Video du chapitre', null=True, upload_to='Chapitre_videos/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])]),
        ),
        migrations.AlterField(
            model_name='cours',
            name='short_video',
            field=models.FileField(help_text='Short Video du Cours', null=True, upload_to='Cours_videos/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])]),
        ),
    ]