from django.db import models
from file_mech.models import CreateFile
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField


class Department(models.Model):
    name = models.CharField (max_length=50 , blank = True)
    priority = models.IntegerField(default = 0)


class employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    level = models.IntegerField(default = 0)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)



statuses = [
        (1, 'sent'),
        (2, 'in_review'),
        (3, 'approved'),
        (4 , 'rejected'),
    ]


class Status(models.Model):
    type_of = models.CharField(
        max_length=2,
        choices= statuses,
        default=1,)
    docId =   models.ForeignKey(CreateFile, on_delete=models.CASCADE , related_name="doc")
    departmentId = models.ForeignKey( Department , on_delete=models.CASCADE,null=True,blank = True)





class send_doc (models.Model):
    send_by = models.ForeignKey(Department, on_delete=models.CASCADE , related_name = "sender")
    reciever = models.ForeignKey(Department,on_delete = models.CASCADE , related_name = "reciever")
    status = models.ForeignKey(Status , on_delete=models.CASCADE)
    path = ArrayField(
            models.IntegerField(blank=True),
            size=8,
            blank = True
    )

