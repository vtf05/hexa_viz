from django.contrib import admin
from .models import Status , Department ,employee ,send_doc
# Register your models here.
admin.site.register(Status)
admin.site.register(Department)
admin.site.register(employee)
admin.site.register(send_doc)