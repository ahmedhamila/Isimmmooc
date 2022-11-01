from django.contrib import admin
from ..models import Formateur

@admin.register(Formateur)
class FormateurAdmin(admin.ModelAdmin):
    '''Admin View for Formateur'''
    list_display = ('first_name','last_name')