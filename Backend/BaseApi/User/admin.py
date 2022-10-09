from django.contrib import admin
from  .models import Profile
# Register your models here.

class Profile_view(admin.ModelAdmin):
    model = Profile

    list_display = (
        'id',
        'username',
        'first_name',
        'last_name',
        'email',
        'age',
    )


admin.site.register(Profile,Profile_view )