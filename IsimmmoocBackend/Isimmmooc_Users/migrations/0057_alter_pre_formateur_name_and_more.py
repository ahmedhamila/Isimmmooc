# Generated by Django 4.1.2 on 2022-10-29 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Isimmmooc_Users', '0056_rename_formateurentreprise_pre_formateur'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pre_formateur',
            name='name',
            field=models.CharField(help_text='Nom de Formateur', max_length=20),
        ),
        migrations.AlterField(
            model_name='pre_formateur',
            name='nom_entreprise',
            field=models.BooleanField(blank=True, max_length=10, null=True),
        ),
    ]
