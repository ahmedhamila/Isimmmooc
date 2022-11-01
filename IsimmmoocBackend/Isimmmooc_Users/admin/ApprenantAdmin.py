from django.contrib import admin
from ..models import Apprenant

@admin.register(Apprenant)
class ApprenantAdmin(admin.ModelAdmin):
    '''Admin View for Apprenant'''
    list_display = ('first_name','last_name')