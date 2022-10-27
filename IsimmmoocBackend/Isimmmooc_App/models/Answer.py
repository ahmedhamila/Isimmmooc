from django.db import models
from .Question import Question

class Answer (models.Model):
    answer_text = models.CharField(max_length=2000, help_text='Answer Text')
    question = models.ForeignKey('Isimmmooc_App.Question', null=False, on_delete=models.CASCADE,default="")

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        
        print(self.answer_set.count())

        if self.answer_set.count() < 5:
            super(Answer, self).save()
        else:
            raise Exception(f'{self.question.question_text} has already 5 Options. No more are allowed.')
    #Metadata
    class Meta :
        ordering = ['-Answer']

    #Methods

    def __str__(self):
        return self.answer_text