from django.contrib import admin
from ..models import Answer


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):

    list_display = ('answer_text','correct')
    list_filter = ('answer_text',)