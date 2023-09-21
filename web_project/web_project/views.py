from django.http import HttpResponse
from django.shortcuts import render

def demopage(request):
    # return HttpResponse('这是一个测试界面')
    return render(request, 'show.html')
