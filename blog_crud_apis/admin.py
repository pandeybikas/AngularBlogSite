from django.contrib import admin
from .models import Category, Author, Blog, Comment


class BlogAdmin(admin.ModelAdmin):
    list_display= ['title', 'author', 'created_at', 'display_blog']
    prepopulated_fields = {'slug':('title',)}

admin.site.register(Category)
admin.site.register(Author)
admin.site.register(Blog, BlogAdmin)
admin.site.register(Comment)
