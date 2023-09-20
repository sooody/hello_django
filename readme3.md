## git配置

>> git与本地项目关联
1.本地建项目
2.github创建repositories
3.本地项目目录下打开 git bash
4.执行 :
git init 
git remote add origin xxx.git   --“xxx”为GitHub上仓库在浏览器上的地址
git pull origin master --allow-unrelated-histories

>> 在VS Code中使用按钮上传代码
1.在VS Code中打开GitBash中设置的本地仓库文件夹
2.选择需要上传的内容进行上传
3.点击有蓝色标号1的“source control“；点击加号将本次修改记为“staged changes”(可以直接点 staged all changes --相当于git中的add命令)
4.点击对号进行commit，一定要输入commit信息
5.点击 publish branch, 填注释


>> git常用命令
pull（拉取）是从远端库中的同名分支拉取代码；
pull from是从远端库可以选择要拉取的分支；
pull（rebase）没用过，详见https://segmentfault.com/a/1190000000456077
push（推送）是将本地分支代码推送到远端同名分支上（远端已经有同名分支）；
push to（推送到）是将本地分支代码推送到远端主分支上；
publish branch（发布分支）将本地分支发布到远端并提交你的代码
commit相关的和git commit相关命令相同

>> 插件
gitlens  --查看git的操作历史
可以辨识出每行代码是什么时间、哪个人提交的，对代码管理有帮助