from django.contrib import admin
from ..models import PreOrganisme


@admin.register(PreOrganisme)
class PreOrganismeAdmin(admin.ModelAdmin):
    '''Admin View for preOrganisme'''
    list_display = ('name',)