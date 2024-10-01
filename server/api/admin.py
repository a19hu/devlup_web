from django.contrib import admin
from api.models import Student,Carousel,SWCMembers
from import_export.admin import ImportExportModelAdmin
from .resource import ReportResource  


class studentAdmin(ImportExportModelAdmin):
    resource_classes = ReportResource
    # ordering=["roll_no",]
    list_display = ["name"]
    # search_fields = ["roll_no","name",]

admin.site.register(Student,studentAdmin)   

admin.site.register(Carousel) 

admin.site.register(SWCMembers,studentAdmin) 
