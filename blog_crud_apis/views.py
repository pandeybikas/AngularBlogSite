from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Category, Author, Blog, Comment
from .serializers import AuthorSerializer, BlogSerializer, CommentSerializer, CategorySerializer

class BlogApiView(viewsets.ModelViewSet):
    queryset= Blog.objects.select_related('author').prefetch_related('category')
    serializer_class=BlogSerializer
    lookup_field='slug'

class AuthorApiView(viewsets.ModelViewSet):
    queryset=Author.objects.all()
    serializer_class=AuthorSerializer

class CommentApiView(viewsets.ModelViewSet):
    queryset=Comment.objects.all()
    serializer_class=CommentSerializer


class CategoryApiView(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
