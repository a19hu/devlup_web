from django.db import models
from datetime import datetime
DEFAULT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIZ5I4Qg-MO4Q6VYx8HgfqoNI-Ot4HRZVZTe8zQqkdZ-up5dE"


class Members(models.Model):
    role = models.CharField(max_length=100, null=True, blank=True)
    year = models.IntegerField(null=True, blank=True, default=2024)
    name= models.CharField(max_length=100,null=True,blank=True)
    email=models.CharField(max_length=100,null=True,blank=True)
    github=models.CharField(max_length=100,null=True,blank=True)
    linkedin=models.CharField(max_length=100,null=True,blank=True)
    description=models.CharField(max_length=250,null=True,blank=True)
    photo=models.URLField(
        null=True, blank=True, default=DEFAULT_URL, max_length=200
    )
    
          
class Gallery(models.Model):
    image=models.URLField(
        null=True, blank=True, default=DEFAULT_URL, max_length=200
    )


class Video(models.Model):
    video=models.URLField(
        null=True, blank=True, default=DEFAULT_URL, max_length=200
    )
    
class Project(models.Model):
    name= models.CharField(max_length=100,null=False,blank=False)
    github=models.CharField(max_length=100)
    website=models.CharField(max_length=100)
    discription=models.CharField(max_length=100)
    short_discription=models.CharField(max_length=100)
    picture=models.URLField(
        null=True, blank=True, default=DEFAULT_URL, max_length=200
    )

class Blog(models.Model):
    author= models.CharField(max_length=100,null=False,blank=False)
    website=models.CharField(max_length=100)
    discription=models.CharField(max_length=100)
    picture=models.URLField(
        null=True, blank=True, default=DEFAULT_URL, max_length=200
    )


class Timeline(models.Model):
    name= models.CharField(max_length=100,null=False,blank=False)
    discription=models.CharField(max_length=100)
    date=models.DateField(default=datetime.now)
    picture=models.URLField(
        null=True, blank=True, default=DEFAULT_URL, max_length=200
    )
    pdf=models.URLField(
        null=True, blank=True, default=DEFAULT_URL, max_length=200
    )
    youtube=models.URLField(
        null=True, blank=True, default=DEFAULT_URL, max_length=200
    )