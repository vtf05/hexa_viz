from django.db import models
from file_mech.models import  CreateFile
# Create your models here.


class CreateSecurityMechanism(models.Model):
    key     = models.CharField(max_length=100,null=True,blank=True)
    level   = models.IntegerField(default = 0 ,null=True,blank=True)
    docId   = models.ForeignKey(CreateFile ,on_delete=models.CASCADE , null = True)