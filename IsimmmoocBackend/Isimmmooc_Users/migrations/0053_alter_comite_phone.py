# Generated by Django 4.1.2 on 2022-10-29 15:27

from django.db import migrations
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('Isimmmooc_Users', '0052_alter_formateurentreprise_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comite',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=8, region=None, unique=True),
        ),
    ]
