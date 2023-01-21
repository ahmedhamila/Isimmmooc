from django.contrib import admin
from ..models import PreFormateur
from ..models import Formateur
from ..models import FormateurCV
from django.contrib.auth.models import User

@admin.register(PreFormateur)
class PreFormateurAdmin(admin.ModelAdmin):
    '''Admin View for PreFormateur'''
    list_display = ('first_name','last_name')

    actions = ['acceptPreFormateur']
    @admin.action(description='Mark selected Pre Formateur as accepted')
    def acceptPreFormateur(self, request, queryset):
        for preFormateur in queryset.values():
            first_name = preFormateur['first_name']
            last_name = preFormateur['last_name']
            date_of_birth = preFormateur['date_of_birth']
            mail = preFormateur['mail']
            phone_number = preFormateur['phone_number']
            cv_id = preFormateur['cv_id']
            image = preFormateur['image']
            user_id = preFormateur['user_id']
            newFormateur = Formateur.objects.create(first_name=first_name,last_name=last_name,date_of_birth=date_of_birth,mail=mail,phone_number=phone_number,cv=FormateurCV.objects.get(id=cv_id),image=image,user=User.objects.get(id=user_id))
            newFormateur.save()
        queryset.update(accepted=True)