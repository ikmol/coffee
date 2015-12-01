from django.contrib import admin

from .models import BlogPost

# Register your models here.

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ("__str__", "description", "timestamp")

admin.site.register(BlogPost, BlogPostAdmin)