from django.contrib import admin
from ..models import Chapitre,Question

class QuestionAdminInline(admin.TabularInline):
    model = Question
@admin.register(Chapitre)
class ChapitreAdmin(admin.ModelAdmin):
    '''Admin View for Chapitre'''
    inlines=(QuestionAdminInline,)
    list_display = ('title','presentation')
    list_filter = ('title',)