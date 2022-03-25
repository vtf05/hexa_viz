from django.http import HttpResponse
from django.shortcuts import render
from .models import CreateFile


from .serializers import FileSerializer
from rest_framework import viewsets


# Create your views here
class CreateFileView(viewsets.ModelViewSet):
       
        queryset=CreateFile.objects.all()
        serializer_class=FileSerializer(queryset,many=True)
        
   
      
            


       


