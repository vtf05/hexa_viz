from django.http import HttpResponse
from django.shortcuts import render
from .models import CreateFile
from security_mech.models import CreateSecurityMechanism
from rest_framework.permissions import IsAuthenticated
from .serializers import CreateFileSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status 
from cryptography.fernet import Fernet
import datetime


# Create your views here
class CreateFileView(viewsets.ModelViewSet):
        permission_classes = (IsAuthenticated,)
        queryset=CreateFile.objects.all()
        serializer_class=CreateFileSerializer

        def create(self, request, *args, **kwargs):
                serializer = self.get_serializer(data=request.data)
                serializer.is_valid(raise_exception=True)
                self.perform_create(serializer)
                headers = self.get_success_headers(serializer.data)
                instance = CreateFile.objects.last()
                key = Fernet.generate_key()
                doc_loc = instance.doc_file
                print(doc_loc)
                new_loc = 'media/'+str(doc_loc)
                with open('mykey.key', 'wb') as mykey:
                        mykey.write(key)

                with open('mykey.key', 'rb') as mykey:
                        key = mykey.read()

                f = Fernet(key)
                with open(str(new_loc) , 'rb') as original_file:
                   original = original_file.read()

                encrypted = f.encrypt(original)

                date = str(datetime.date.today())
                file_name = 'media/efiles/enc_alkendu' + date+ '.pdf'
                with open (file_name, 'wb') as encrypted_file:
                    encrypted_file.write(encrypted)

                securityKey = CreateSecurityMechanism.objects.create(docId = instance,key=key)
                print( "encryption doneeeee")
                created_file = CreateFile.objects.last()
                created_file.doc_file =  file_name
                created_file.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)




