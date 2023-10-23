from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenObtainPairView
)
from userapp import views

urlpatterns = [
    path('register/', views.CreateUserView.as_view(), name='register'),
    #Authentication
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]