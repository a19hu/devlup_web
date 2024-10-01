from django.urls import path
from .views import StudentDetails, Carouselimage, FetchSWCMembers

urlpatterns = [
    path('students/', StudentDetails.as_view(), name='students'),
    path('carousel/', Carouselimage.as_view(), name='students'),
    path('fetch-students/', FetchSWCMembers.as_view(), name="fetch-students")
]
