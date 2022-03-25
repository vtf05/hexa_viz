from django.db import models

# Create your models here.
class CreateSecurityMechanism(models.Model):
    key     = models.CharField(max_length=100,null=True,blank=True)
    level   = models.IntegerField(max_length=150,null=True,blank=True)