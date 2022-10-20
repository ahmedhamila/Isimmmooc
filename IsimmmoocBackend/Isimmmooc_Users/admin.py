from django.contrib import admin
from .models import Apprenant,Formateur,Comite,Organisme
# Register your models here.
@admin.register(Apprenant)
class ApprenantAdmin(admin.ModelAdmin):
    '''Admin View for Apprenant'''
    list_display = ('name',)


@admin.register(Formateur)
class FormateurAdmin(admin.ModelAdmin):
    '''Admin View for Formateur'''
    list_display = ('name',)

@admin.register(Comite)
class ComiteAdmin(admin.ModelAdmin):
    '''Admin View for Comite'''
    list_display = ('name',)

@admin.register(Organisme)
class OrganismeAdmin(admin.ModelAdmin):
    '''Admin View for Organisme'''
    list_display = ('name',)