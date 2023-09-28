from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt

def demopage(request):
    # return HttpResponse('这是一个测试界面')
    print('进入首页')
    return render(request, 'show.html')

def show_arg(request):
    # return HttpResponse('12123123123123')
    data = '888'
    # return render(request, 'show.html', locals())
    return render(request, 'show.html', {"data":data})