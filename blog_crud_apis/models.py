from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Author(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    name=models.CharField(max_length=150)
    pic=models.ImageField(upload_to='authors_pic/', blank=True, null=True, default='authors_pic/user.png')

    def __str__(self):
        return self.name
    
class Category(models.Model):
    category_name=models.CharField(max_length=100)

    def __str__(self):
        return self.category_name

class Blog(models.Model):
    title=models.CharField(max_length=200, blank=False, null=False)
    slug=models.SlugField(max_length=200, unique=True)
    image=models.ImageField(upload_to='blog_images/', blank=True, null=True)
    body=models.TextField()
    author=models.ForeignKey(Author, on_delete=models.PROTECT, related_name='blogs')
    category=models.ManyToManyField(Category, default='uncategorised')
    display_blog=models.BooleanField(default=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)

    def save(self, *args, **Kwargs):
        if not self.slug:
            base_slug=slugify(self.title)
            slug=base_slug
            counter=1

            while Blog.objects.filter(slug=slug).exists():
                slug= f'{base_slug}-{counter}'
                counter +=1
            self.slug=slug
        super().save(*args, **Kwargs)
    def __str__(self):
        return self.title
    
    
class Comment(models.Model):
    blog=models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='comments')
    commented_by=models.CharField(max_length=200)
    comment_body=models.TextField()
    show_comment=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.blog.title} - {self.comment_body}'

    


