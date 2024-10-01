from .models import Student, Carousel, SWCMembers
from loguru import logger
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import DisplayPageStudentTeam
from django.http import JsonResponse

class Carouselimage(APIView):
    def get(self, ):
            carousels= Carousel.objects.all()
            carousels_list= list(carousels.values())
            return JsonResponse(carousels_list,safe=False)

class StudentDetails(APIView):
    def get(self,request):
     try:
        Students= Student.objects.all()
        for student in Students :
            print(student.name)
            
        student_list = list(Students.values()) 
        return JsonResponse(student_list,status=200,safe=False)
     except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
     

class FetchSWCMembers(APIView):
    """
    GET API TO FETCH ALL SWC MEMBERS DETAILS

    Example cURL:
    curl --location 'http://localhost:8000/api/fetch-students?role=assistant_head&type=student&year=2024'
    """
    
    def get(self, request):
        role = request.GET.get("role", None)
        year = request.GET.get("year", None)
        type_mem = request.GET.get("type", None)

        logger.info("Fetch SWC_MEMBERS")

        if not role or not year or not type_mem:
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
        
            serialized_objs = DisplayPageStudentTeam(data=queryset, many=True)
            
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



    
    
    
   