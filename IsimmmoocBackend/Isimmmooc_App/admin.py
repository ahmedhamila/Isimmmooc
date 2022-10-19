from django.contrib import admin
from .models import Cour
# Register your models here.

@admin.register(Cour)
class CourAdmin(admin.ModelAdmin):
    '''Admin View for Cour'''
    list_display = ('name',)
    list_filter = ('name',)
