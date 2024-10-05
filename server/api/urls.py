from django.urls import path
from .views import Galleryimage, FetchMembers, FetchVideo, FetchProject,FetchTimeline, FetchBlog

urlpatterns = [
    path('timeline/', FetchTimeline.as_view(), name='timeline'),
    path('gallery/', Galleryimage.as_view(), name='gallery'),
    path('video/', FetchVideo.as_view(), name='video'),  
    path('fetch-project/', FetchProject.as_view(), name="fetch-project"),
    path('fetch-blog/', FetchBlog.as_view(), name="fetch-blog"),
    path('fetch-members/', FetchMembers.as_view(), name="fetch-members")

]
