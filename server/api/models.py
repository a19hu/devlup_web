from django.db import models
from .constants import (DEFAULT_URL, 
                        POSITION_CHOICES, 
                        STATUS_CHOICES, 
                        TEAM_CHOICES)

class Student(models.Model):
    name= models.CharField(max_length=100,null=False,blank=False)
    phone=models.CharField(max_length=10)
    hometown=models.CharField(max_length=100)
    branch=models.CharField(max_length=100)
    email=models.CharField(max_length=30)
    postion=models.CharField(max_length=100,choices=POSITION_CHOICES)
    status=models.CharField(max_length=100,choices=STATUS_CHOICES)
    team=models.CharField(max_length=10,choices=TEAM_CHOICES)
    instagram=models.CharField(max_length=100)
    linkedin=models.CharField(max_length=100)
    discription=models.CharField(max_length=100)
    picture=models.ImageField(upload_to='images')


class SWCMembers(models.Model):
    type_mem = models.CharField(
        max_length=100, null=True, blank=True, default="student"
    )
    role = models.CharField(max_length=100, null=True, blank=True)
    year = models.IntegerField(null=True, blank=True, default=2024)
    name= models.CharField(max_length=100,null=True,blank=True)
    phone=models.CharField(max_length=100,null=True,blank=True)
    hometown=models.CharField(max_length=100,null=True,blank=True)
    branch=models.CharField(max_length=100,null=True,blank=True)
    email=models.CharField(max_length=100,null=True,blank=True)
    instagram=models.CharField(max_length=100,null=True,blank=True)
    linkedin=models.CharField(max_length=100,null=True,blank=True)
    description=models.CharField(max_length=250,null=True,blank=True)
    photo=models.URLField(
        null=True, blank=True, default=DEFAULT_URL, max_length=200
    )
    
          
class Carousel(models.Model):
    image=models.ImageField(upload_to='carousel')
    