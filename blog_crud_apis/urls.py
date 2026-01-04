from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . import views

router=DefaultRouter()
router.register(r'blogs', views.BlogApiView, basename='blogs'),
router.register(r'authors', views.AuthorApiView, basename='authors'),
router.register(r'comments', views.CommentApiView, basename='comments'),
router.register(r'category', views.CategoryApiView, basename='category'),

urlpatterns = [
    path('v1/', include(router.urls))
    
]
