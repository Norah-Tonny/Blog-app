from django.contrib import admin
from .models import Blog, Comment
from .import models

@admin.register(models.Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display=("blogtitle","blogdescription","blogpost","bloger","slug",'image')
    prepopulated_fields={'slug':('blogtitle',),}
    
admin.site.register(Comment)

