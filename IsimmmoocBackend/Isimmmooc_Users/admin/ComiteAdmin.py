from django.contrib import admin
from ..models import Comite

@admin.register(Comite)
class ComiteAdmin(admin.ModelAdmin):
    '''Admin View for Comite'''
    list_display = ('first_name','last_name')