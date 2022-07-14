from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import UserLog
from .serializer import UserLogSerializer


@api_view(['GET', 'POST'])
def userlog_list(request):
    #GET일 때
    if request.method == 'GET':
        userlogs = UserLog.objects.all() #userlog 객체를 모두 받아옴
        serailized_userlogs = UserLogSerializer(userlogs, many=True) #serailized 된 userlog들

        return Response(serailized_userlogs.data, status=200)  #serailized 된 userlog의 data들 출력, status는 200

    #POST일 때
    if request.method == 'POST':
        serializer = UserLogSerializer(data=request.data) #작성한 data를 serialized 함
        if serializer.is_valid(): #유효하면
            serializer.save() #save
            return Response(serializer.data, status=status.HTTP_201_CREATED) #serailized 된 data 출력, status는 201
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) #유효하지 않으니 error 출력
