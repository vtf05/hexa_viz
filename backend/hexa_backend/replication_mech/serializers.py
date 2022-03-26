from rest_framework import serializers
import datetime

from .models import Department , employee , Status ,send_doc


   
class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'
   

class GeeksSerializer(serializers.Serializer):
    # initialize fields
    dictionary = serializers.DictField(
    child = serializers.CharField())
     


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class employeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = employee
        fields = '__all__'


class sendDocSerializer(serializers.ModelSerializer):
    class Meta:
        model = send_doc
        fields = '__all__'
            