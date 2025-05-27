from .models import Gallery,Members, Video, Project, Blog, Timeline
from loguru import logger
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import DisplayPageTeam
from django.http import JsonResponse

class Galleryimage(APIView):
    def get(self,request):
            gallerys= Gallery.objects.all()
            print(gallerys)
            gallerys_list= list(gallerys.values())
            return JsonResponse(gallerys_list,safe=False)

class FetchVideo(APIView):
    def get(self,request):
            videos= Video.objects.all()
            videos_list= list(videos.values())
            return JsonResponse(videos_list,safe=False)


class FetchProject(APIView):
    def get(self,request):
     try:
        projects= Project.objects.all()
        project_list = list(projects.values()) 
        return JsonResponse(project_list,status=200,safe=False)
     except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

class FetchBlog(APIView):
    def get(self,request):
     try:
        blogs= Blog.objects.all()
        blog_list = list(blogs.values()) 
        return JsonResponse(blog_list,status=200,safe=False)
     except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

class FetchTimeline(APIView):
    def get(self,request):
     try:
        timelines= Timeline.objects.all()
        timeline_list = list(timelines.values()) 
        return JsonResponse(timeline_list,status=200,safe=False)
     except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
     

class FetchMembers(APIView):
    def get(self, request):
        try:
            members = Members.objects.all()
            members_list = list(members.values())
            return JsonResponse(members_list, status=200, safe=False)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)