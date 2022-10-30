from email.policy import default
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from multiselectfield import MultiSelectField
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

    MY_CHOICES = ((1, 'Item title 2.1'),
               (2, 'Item title 2.2'),
               (3, 'Item title 2.3'),
               (4, 'Item title 2.4'),
               (5, 'Item title 2.5'))

    answers = MultiSelectField(default=1,null=False,choices=MY_CHOICES,max_choices=3,
                                 max_length=3)
    

    #Metadata
    class Meta :
        ordering = ['-question_text']

    #Methods

    def __str__(self):
        return self.question_text