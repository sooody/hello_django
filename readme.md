>> 基础教程
https://blog.csdn.net/weixin_40283570/article/details/97240666
>> 创建应用及参数配置 
https://blog.csdn.net/weixin_40283570/article/details/88901557

## 1 根目录执行命令，创建虚拟环境
(避免将Django安装到全局Python环境中，并且可以精确控制应用程序中使用的库)

python -m venv env

## 2 Ctrl + Shift + P , 选择Python：Select Interpreter命令
选择项目文件夹中以./env或开头的虚拟环境.\env

## 3 配置终端
Ctrl + Shift +` 
或  
Ctrl + `，
创建一个终端并执行脚本激活虚拟环境： env\scripts\activate

如报错无权限，则用管理员执行：
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
当shell前面有（env）提示，标识虚拟环境已激活

## 4 安装django
项目根目录执行： pip install django

## 5 创建django 项目
项目根目录（也可虚拟机）执行： django-admin startproject web_project 

## 6 运行并验证
web_project目录执行： python manage.py runserver  
 < 服务器在默认端口8000上运行 >   (更改端口 python manage.py runserver 5000)
报错： You have 18 unapplied migration(s) 处理 -- 运行： python manage.py migrate
