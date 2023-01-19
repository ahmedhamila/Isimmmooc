from django.contrib import admin
from ..models import Question,Answer

class AnswerAdminInline(admin.TabularInline):
    model = Answer
    show_change_link=True

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    '''Admin View for Question'''
    inlines=(AnswerAdminInline,)
    list_display = ('question_text','number_options','chapitre','type')
    list_filter = ('question_text','number_options','chapitre','type')