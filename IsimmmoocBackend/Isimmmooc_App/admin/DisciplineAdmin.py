from django.contrib import admin
from ..models import Discipline

@admin.register(Discipline)
class DisciplineAdmin(admin.ModelAdmin):
    '''Admin View for Discipline'''
    list_display = ('name',)
    list_filter = ('name',)