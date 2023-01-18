from django.db import models
from .Question import Question

class Answer (models.Model):
    answer_text = models.CharField(max_length=2000, help_text='Answer Text')
    question = models.ForeignKey('Isimmmooc_App.Question', related_name='answers',null=False, on_delete=models.CASCADE,default=None, help_text='Question relative')
    
    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):

        num=len(Answer.objects.filter(question = self.question))
        if num < self.question.number_options:
            super(Answer, self).save()
        else:
            raise Exception(f'{self.question.question_text} has already {self.question.number_options} Options. No more are allowed.')
    correct = models.BooleanField(default=False)
    #Metadata
    class Meta :
        ordering = ['-answer_text']

    #Methods

    def __str__(self):
        return self.answer_text