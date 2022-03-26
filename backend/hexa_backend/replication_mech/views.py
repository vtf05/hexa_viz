from django.http import HttpResponse
from django.shortcuts import render
from .models import send_doc , Status ,Department ,employee
from rest_framework.permissions import IsAuthenticated
from .serializers import sendDocSerializer, StatusSerializer, DepartmentSerializer, employeeSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status 
from file_mech.models import CreateFile
from rest_framework.decorators import action ,api_view

# Create your views here

#  done cur_status
#  done live running status
#  done path need to have tree over here


def get_path(source,dest) :
    dic = { (1,4) :[1,2,3,4],
    (1,3) :[1,2,3,4],
    (2,4) :[1,2,3,4],
    }
    path = dic[(1,4)]
   
    return path


class StatusView(viewsets.ModelViewSet):
        permission_classes = (IsAuthenticated,)
        queryset= Status.objects.all()
        serializer_class = StatusSerializer


        # it will be called for geting all the doc in pending review
        @action(methods=['get'], detail=True,url_path='pending', url_name='pending')
        def pending_review(self, request, pk=None,**kwargs):
            departmentId = request.query_params['departmentId']
            status = Status.objects.filter(departmentId = departmentId)
            status.type = 2
            serializer_data  = self.get_serializer(status,many=True)
            return Response(serialize_data.data)


        # it will be called when document is forwarded or rejected by a person 
        def update(self, request, *args, **kwargs):
            partial = kwargs.pop('partial', False)
            instance = self.get_object()
            get_next_point = get_next_point(instance.id)
            path = send_doc.objects.get(id = instance.id).path
            ind = path.index(insatance.departmentId)


            if ind+1 == len(path) :
                if request.data['update'] == 'confirm' :
                    data['type_of'] = 1
                else :
                    data['type_of'] = 4
                    
            else :
                if request.data['update'] == 'confirm' :
                    data['departmentId'] = path[ind+1]
                    data['type_of'] = 1

                else :
                    data['type_of'] = 4   


            serializer = self.get_serializer(instance, data=data, partial=True)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            return Response(serializer.data) 
               



        # this method will be called for geting live running status 
        @action(methods=['get'], detail=True , url_path='graphical_status', url_name='graphical_status')
        def graphical_status(self, request, pk=None,**kwargs):
            path =  request.query_params['path']
            instance = self.get_object()
            cur_depart = instance.departmentId
            path = get_path(path[0], path[-1])
            dic = {}
            for dep in path :
                department = Department.objects.get(id=dep)
                name = department.name
                if dep == cur_depart.id :
                    dic[name] = instance.type_of
                else :    
                    dic[name] = "approved"
            serialize_data = PublicProfileSerializer(dic)
            return Response(serialize_data.data, status = status.HTTP_201_CREATED )   




class sendDocView(viewsets.ModelViewSet):
        permission_classes = (IsAuthenticated,)
        queryset= send_doc.objects.all()
        serializer_class=sendDocSerializer


        #  when a doc is sent then there will be some path  
        def create(self, request, *args, **kwargs):
                data['send_by'] = request.data['sender']
                data['reciever'] = request.data['receiver']
                doc = CreateFile.object.get(request.data['docId'])
                status  = Status.objects.create(docId = doc , departmentId = data['reciever'] )
                data['status'] = status
                data['path'] = get_path(request.data['sender'], request.data['receiver'])
                serializer = self.get_serializer(data=data)
                serializer.is_valid(raise_exception=True)
                self.perform_create(serializer)
                headers = self.get_success_headers(serializer.data)
                return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)









