from django.http import HttpResponse
from django.shortcuts import render
from .models import CreateFile
from rest_framework.permissions import IsAuthenticated
from .serializers import CreateFileSerializer
from rest_framework import viewsets


# Create your views here
class CreateFileView(viewsets.ModelViewSet):
        permission_classes = (IsAuthenticated,)
        queryset=CreateFile.objects.all()
        serializer_class=CreateFileSerializer

       


