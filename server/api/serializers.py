from rest_framework import serializers
from .models import Student, Carousel, SWCMembers

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Student
        fields='__all__'
    
    
class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model=Carousel
        fields='__all__'


class DisplayPageStudentTeam(serializers.ModelSerializer):
    class Meta:
        model=SWCMembers
        fields=[
            'name',
            'phone',
            'hometown',
            'branch',
            'email',
            'instagram',
            'linkedin',
            'description',
            'photo',
        ]