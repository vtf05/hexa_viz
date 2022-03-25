from django.db import models
import datetime
from django.utils import timezone
# Create your models here.
class CreateFile(models.Model):
    title=models.CharField(max_length=100,null=True,blank=True)
    subject=models.CharField(max_length=100,null=True,blank=True)
    date=models.DateField(default=timezone.now)
    file=models.FileField(upload_to='files/',max_length=200,null=True)
    status=models.CharField(max_length=200,null=True,blank=True)
    category=models.CharField(max_length=50,null=True,blank=True)

class related_info(models.Model):
    doc = models.ForeignKey(CreateFile,on_delete=models.CASCADE)
    related_info = models.TextField()
