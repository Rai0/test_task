from rest_framework import serializers
from .models import *

class tabelSerializers (serializers.ModelSerializer):
    class Meta: 
        model = tabelModel
        fields = '__all__'