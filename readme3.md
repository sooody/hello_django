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
3.点击有蓝色标号1的“source control“；点击加号将本次修改记为“staged changes”(可以直接点 staged all changes)
4.点击对号进行commit，一定要输入commit信息
