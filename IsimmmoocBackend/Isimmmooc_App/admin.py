from django.contrib import admin
from .models import Cours,Discipline,Chapitre,Question
# Register your models here.

@admin.register(Cours)
class CoursAdmin(admin.ModelAdmin):
    '''Admin View for Cours'''
    list_display = ('name','description')
    list_filter = ('name','description')

@admin.register(Discipline)
class DisciplineAdmin(admin.ModelAdmin):
    '''Admin View for Discipline'''
    list_display = ('name',)
    list_filter = ('name',)

@admin.register(Chapitre)
class ChapitreAdmin(admin.ModelAdmin):
    '''Admin View for Chapitre'''
    list_display = ('titre','presentation')
    list_filter = ('titre',)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    '''Admin View for Question'''
    list_display = ('question_text','number_options','chapitre','type')
    list_filter = ('question_text','number_options','chapitre','type')