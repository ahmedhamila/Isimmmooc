from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from multiselectfield import MultiSelectField
class Question (models.Model):
    question_text=models.TextField(max_length=2000,null=False,help_text='Question')

    number_options=models.IntegerField(validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ],null=False,help_text='Nombre d option')

    chapitre = models.OneToOneField('Isimmmooc_App.Chapitre',related_name='questions', null=False, on_delete=models.CASCADE,default=None,help_text='Chapitre associe')

    class QuestionType(models.TextChoices):
        ONE_CHOICE = 'OC', ('One_Choice')
        MULTIPLE_CHOICE = 'MC', ('Multiple_Choice')
        
    type = models.CharField(
        max_length=2,
        choices=QuestionType.choices,
        default=QuestionType.ONE_CHOICE,help_text='Type de Question')
    

    #Metadata
    class Meta :
        ordering = ['-question_text']

    #Methods

    def __str__(self):
        return self.question_text