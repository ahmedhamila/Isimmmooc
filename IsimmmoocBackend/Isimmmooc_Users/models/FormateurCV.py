from django.db import models


class FormateurCV (models.Model):
   
    cv = models.FileField(null=False, blank=True, help_text='CV de Formateur',upload_to='CVs/Formateur/')
   
    class Meta :
        ordering = ['-cv']
    def __str__(self):
       return str(self.cv.file) 