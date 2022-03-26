from django.db.models.signals import post_save, post_delete, pre_delete
from django.contrib.auth.models import User
from .models import CreateFile
from security_mech.models import CreateSecurityMechanism
# we want a new profile to be automatically createtd for each new user. 
@receiver(post_save, sender = CreateFile )
def create_createFile(sender, instance, created, **kwargs):     
    if created:
       securityKey = CreateSecurityMechanism.objects.create(docId = instance)
       print('successfull created')
     