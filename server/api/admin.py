from django.contrib import admin
from api.models import Gallery,Members, Video, Project, Blog, Timeline
from import_export.admin import ImportExportModelAdmin
from .resource import MemberResource, ProjectResource,TimelineResource, BlogResource  


class MembersAdmin(ImportExportModelAdmin):
    resource_class = MemberResource
    # ordering=["roll_no",]
    list_display = ["name"]
    search_fields = ["name"]

class projectAdmin(ImportExportModelAdmin):
    resource_class = ProjectResource
    # ordering=["roll_no",]
    list_display = ["name"]
    search_fields = ["name"]


class timelinesAdmin(ImportExportModelAdmin):
    resource_class = TimelineResource
    list_display = ["name"]


class blogAdmin(ImportExportModelAdmin):
    resource_classes = BlogResource
    list_display = ["author"]


admin.site.register(Gallery) 

admin.site.register(Video) 

admin.site.register(Blog,blogAdmin) 

admin.site.register(Timeline,timelinesAdmin) 

admin.site.register(Project,projectAdmin)   

admin.site.register(Members,MembersAdmin) 
