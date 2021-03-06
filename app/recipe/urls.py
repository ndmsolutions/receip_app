from django.urls import path, include
from rest_framework.routers import DefaultRouter

from recipe import views


router = DefaultRouter()
router.register('tags', views.TagViewSet)
router.register('ingredients', views.IngredientViewSet)
router.register('recipes', views.RecipeViewSet)
# router.register('all_recipes', views.RecipeAllViewSet)

app_name = 'recipe'

urlpatterns = [
    path('', include(router.urls))
]
