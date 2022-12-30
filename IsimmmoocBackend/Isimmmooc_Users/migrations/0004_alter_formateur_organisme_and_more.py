# Generated by Django 4.1.2 on 2022-12-29 21:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Isimmmooc_Users', '0003_rename_email_organisme_mail_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formateur',
            name='organisme',
            field=models.ForeignKey(blank=True, default=None, help_text='Organisme de Formateur(si existe)', null=True, on_delete=django.db.models.deletion.CASCADE, to='Isimmmooc_Users.organisme'),
        ),
        migrations.AlterField(
            model_name='preformateur',
            name='organisme',
            field=models.ForeignKey(blank=True, default=None, help_text='Organisme de Formateur(si existe)', null=True, on_delete=django.db.models.deletion.CASCADE, to='Isimmmooc_Users.organisme'),
        ),
    ]