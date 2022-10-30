from django.contrib import admin
from ..models import Organisme


@admin.register(Organisme)
class OrganismeAdmin(admin.ModelAdmin):
    '''Admin View for Organisme'''
    list_display = ('name',)