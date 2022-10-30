from django.contrib import admin
from ..models import Cours,Chapitre

class ChapitreAdminInline(admin.TabularInline):
    model=Chapitre


@admin.register(Cours)
class CoursAdmin(admin.ModelAdmin):
    '''Admin View for Cours'''
    inlines=(ChapitreAdminInline,)
    list_display = ('name','description')
    list_filter = ('name','description')