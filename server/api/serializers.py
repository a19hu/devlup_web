from rest_framework import serializers
from .models import Gallery,Members, Video, Project, Blog, Timeline

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model=Gallery
        fields='__all__'


class TimelineSerializer(serializers.ModelSerializer):
    class Meta:
        model=Timeline
        fields='__all__'
        
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields='__all__'

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Video
        fields='__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields='__all__'

class DisplayPageTeam(serializers.ModelSerializer):
    class Meta:
        model=Members
        fields=[
            'name',
            'email',
            'linkedin',
            'description',
            'photo',
        ]