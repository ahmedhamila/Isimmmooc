from django.contrib import admin
from ..models import FormateurCV

@admin.register(FormateurCV)
class FormateurCVAdmin(admin.ModelAdmin):
    '''Admin View for Formateur'''
    list_display = ('cv',)