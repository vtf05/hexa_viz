from django.http import HttpResponse
from django.shortcuts import render
from .models import CreateSecurityMechanism


from .serializer import CreateSecurityMechanismSerializer
from rest_framework import viewsets


security_mech # Create your views here
class CreateSecurityMechanismView(viewsets.ModelViewSet):
       
        queryset=CreateSecurityMechanism.objects.all()
        serializer_class=CreateSecurityMechanismSerializer(queryset,many=True)