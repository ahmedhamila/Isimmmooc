from django.contrib import admin
from ..models import PreFormateur

@admin.register(PreFormateur)
class PreFormateurAdmin(admin.ModelAdmin):
    '''Admin View for PreFormateur'''
    list_display = ('first_name','last_name')