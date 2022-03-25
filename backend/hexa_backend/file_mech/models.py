from django.db import models
import datetime

# Create your models here.
class CreateFile(models.Model):
    title=models.CharField(max_length=100,null=True,blank=True)
    subject=models.CharField(max_length=100,null=True,blank=True)
    date=models.DateField(_("Date"), default=datetime.date.today)
    file=models.FileField(upload_to=None,max_length=200,null=True)
    relevant=models.TextField(max_length=100,null=True,blank=True)
    status=models.CharField(max_length=200,null=True,blank=True)
    category=models.CharField(max_length=50,null=True,blank=True)

