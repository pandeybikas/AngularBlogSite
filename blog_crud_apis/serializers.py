from rest_framework import serializers
from .models import Author, Blog, Comment, Category

class AuthorSerializer(serializers.ModelSerializer):
    pic = serializers.ImageField(read_only=True)

    class Meta:
        model = Author
        fields = ['id', 'name', 'pic']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields="__all__"
        read_only_fields=['id']

class BlogSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)
    author_id = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(),
        write_only=True,
        source='author'
    )
    category= CategorySerializer(many=True, read_only=True)
    category_ids=serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        many=True,
        write_only=True,
        source='category'
    )

    class Meta:
        model = Blog
        fields = ['title','slug','image', 'body', 'author', 'category', 'category_ids', 'author_id','created_at']
        read_only_fields = ['slug','display_blog', 'created_at', 'updated_at']

    


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields="__all__"
        read_only_fields=['show_comment', 'created_at']