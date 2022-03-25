from rest_framework import serializers
import datetime

from .models import CreateFile


   
class CreateFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateFile
        fields = '__all__'
   