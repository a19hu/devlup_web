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
    """
    GET API TO FETCH ALL SWC MEMBERS DETAILS

    Example cURL:
    curl --location 'http://localhost:8000/api/fetch-students?role=assistant_head&type=student&year=2024'
    """
    
    def get(self, request):
        role = request.GET.get("role", None)
        year = request.GET.get("year", None)

        logger.info("Fetch MEMBERS")

        if not role or not year:
            logger.error("Query Params not present")
            return Response(
                data={
                    "msg": "Please enter relevant query"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        
        logger.info("Query Params Verified")

        queryset = SWCMembers.objects.filter(
            role=role
        )

        logger.info(queryset)

        if queryset.exists():
        
            serialized_objs = DisplayPageTeam(data=queryset, many=True)
            
            logger.debug(f"Serialized ok, {serialized_objs.is_valid()}")

            return Response(
                data={
                    "response": serialized_objs.data
                }
            )
        else:
            return Response(
                data={
                    "msg": "Empty Queryset"
                },
                status=status.HTTP_400_BAD_REQUEST
            )



    
    
    
   