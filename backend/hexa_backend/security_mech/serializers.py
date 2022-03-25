from .models import CreateSecurityMechanism
from rest_framework import serializers



class CreateSecurityMechanismSerializer(serializers.ModelSerializer):
    class Meta:
       model=CreateSecurityMechanism
       fields="_all_"