from import_export import resources 
from .models import Members, Timeline, Project, Blog
class MemberResource(resources.ModelResource):
     class Meta:
         model = Members
         fields='__all__'

class BlogResource(resources.ModelResource):
     class Meta:
         model = Blog


class ProjectResource(resources.ModelResource):
     class Meta:
         model = Project

class TimelineResource(resources.ModelResource):
     class Meta:
         model = Timeline