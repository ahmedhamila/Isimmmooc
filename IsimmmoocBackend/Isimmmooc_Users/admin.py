<<<<<<< HEAD
from django.contrib import admin
from .models import Apprenant,Formateur,Comite,Organisme,PreFormateur,preOrganisme
# Register your models here.
@admin.register(Apprenant)
class ApprenantAdmin(admin.ModelAdmin):
    '''Admin View for Apprenant'''
    list_display = ('name',)


@admin.register(Formateur)
class FormateurAdmin(admin.ModelAdmin):
    '''Admin View for Formateur'''
    list_display = ('name',)
@admin.register(PreFormateur)
class PreFormateurAdmin(admin.ModelAdmin):
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
@admin.register(preOrganisme)
class preOrganismeAdmin(admin.ModelAdmin):
    '''Admin View for preOrganisme'''
    list_display = ('name',)    
=======


>>>>>>> a0d0d785703d030782d4c4b89199564ecea3c649
