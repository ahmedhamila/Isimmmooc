# Generated by Django 4.1.2 on 2022-12-28 14:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Isimmmooc_Users', '0002_remove_preorganisme_adresse_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='organisme',
            old_name='email',
            new_name='mail',
        ),
        migrations.RenameField(
            model_name='preorganisme',
            old_name='email',
            new_name='mail',
        ),
    ]
