from django.contrib import admin
from .models import Cours,Discipline
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