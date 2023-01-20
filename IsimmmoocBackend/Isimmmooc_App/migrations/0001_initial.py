# Generated by Django 4.1.2 on 2023-01-20 11:35

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Isimmmooc_Users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Chapitre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Titre du chapitre', max_length=200)),
                ('video', models.FileField(help_text='Video du chapitre', null=True, upload_to='Chapitre_videos/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])])),
                ('presentation', models.TextField(default=None, help_text='Presentation du chapitre', max_length=2000)),
            ],
            options={
                'ordering': ['-title'],
            },
        ),
        migrations.CreateModel(
            name='Discipline',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Nom du discipline', max_length=100)),
            ],
            options={
                'ordering': ['-name'],
            },
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_text', models.TextField(help_text='Question', max_length=2000)),
                ('number_options', models.IntegerField(help_text='Nombre d option', validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('type', models.CharField(choices=[('OC', 'One_Choice'), ('MC', 'Multiple_Choice')], default='OC', help_text='Type de Question', max_length=2)),
                ('chapitre', models.OneToOneField(default=None, help_text='Chapitre associe', on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='Isimmmooc_App.chapitre')),
            ],
            options={
                'ordering': ['-question_text'],
            },
        ),
        migrations.CreateModel(
            name='Cours',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Nom de Cours', max_length=100)),
                ('short_video', models.FileField(help_text='Short Video du Cours', null=True, upload_to='Cours_videos/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])])),
                ('description', models.TextField(default=None, help_text='Description du Cours', max_length=2000)),
                ('period', models.FloatField(default=1, help_text='Periode du Cours(en Heure)')),
                ('difficulty', models.CharField(choices=[('BG', 'Beginner'), ('MD', 'Intermediate'), ('AV', 'Advanced')], default='BG', help_text='Difficulte du chapitre', max_length=2)),
                ('discipline', models.ForeignKey(default=None, help_text='Discipline du Cours', on_delete=django.db.models.deletion.CASCADE, to='Isimmmooc_App.discipline')),
                ('formateur', models.ForeignKey(default=None, help_text='Formateur du Cours', on_delete=django.db.models.deletion.CASCADE, to='Isimmmooc_Users.formateur')),
            ],
        ),
        migrations.AddField(
            model_name='chapitre',
            name='cours',
            field=models.ForeignKey(default=None, help_text='Cours associe', on_delete=django.db.models.deletion.CASCADE, related_name='chapitres', to='Isimmmooc_App.cours'),
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer_text', models.CharField(help_text='Answer Text', max_length=2000)),
                ('correct', models.BooleanField(default=False)),
                ('question', models.ForeignKey(default=None, help_text='Question relative', on_delete=django.db.models.deletion.CASCADE, related_name='answers', to='Isimmmooc_App.question')),
            ],
            options={
                'ordering': ['-answer_text'],
            },
        ),
    ]
