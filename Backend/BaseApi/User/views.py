from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import ProfileSerializer
from rest_framework.response import Response
import json

# Create your views here.

class user_profile(APIView):
    def post(self, request):
        # data = request.data
        # print(data)
        # return Response("Data is Save Successfully")
        # data = {**request.data, "age": json.dumps(request.data["age"])}
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Data is Save Successfully")
        else:
            return Response(serializer.errors)
