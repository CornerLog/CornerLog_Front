from django.core import serializers
from rest_framework import serializers
from .models import UserLog

class UserLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLog
        fields = ['author', 'password', 'content']
    author = serializers.CharField(max_length=30)
    password = serializers.CharField(max_length=30)
    content = serializers.CharField(max_length=1000)
#Serialize : 모델 인스턴스 JSON/XML로 변환