# Generated by Django 4.1.2 on 2022-10-28 23:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Isimmmooc_Users', '0006_formateur_date_de_naissance'),
    ]

    operations = [
        migrations.AddField(
            model_name='formateur',
            name='address_mail',
            field=models.EmailField(blank=True, default=' a', max_length=254, null=True),
        ),
    ]
