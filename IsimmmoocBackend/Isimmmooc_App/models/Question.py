from email.policy import default
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Question (models.Model):
    question_text=models.TextField(max_length=2000,null=False,default="Question Text")

    number_options=models.IntegerField(validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ],null=False)

    chapitre = models.OneToOneField('Isimmmooc_App.Chapitre', null=False, on_delete=models.CASCADE,default="")

    class QuestionType(models.TextChoices):
        ONE_CHOICE = 'OC', ('One_Choice')
        MULTIPLE_CHOICE = 'MC', ('Multiple_Choice')
        
    type = models.CharField(
        max_length=2,
        choices=QuestionType.choices,
        default=QuestionType.ONE_CHOICE,)
    

    #Metadata
    class Meta :
        ordering = ['-question_text']

    #Methods

    def __str__(self):
        return self.question_text