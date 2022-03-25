from rest_framework import serializers
import datetime

from backend.hexa_backend.file_mech.models import CreateFile
class FileSerializer(serializers.ModelSerializer):
    class Meta:
       model=CreateFile
       fields="__all__"

   