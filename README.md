# vue-demo

> 泽泽测试Demo

## 编译安装使用

``` bash
# 安装依赖
npm install  # 或使用 yarn

# 运行程序 （8081端口）
npm run dev

# 编译 (dev 环境)
node build/build.js build dev

# 编译 (production 环境)
npm run build 

# 编译并生成报告
npm run build --report

# 编译后产物文件
ls dist/*

```



## 本项目 初始化 过程
```bash

# 环境
$ node -v
v12.16.1

$ npm -v 
6.14.2

$ yarn -v
1.13.0

$ vue --version
@vue/cli 4.2.3

# 全局 安装 vue
$ yarn global add @vue/cli 
$ yarn global add @vue/cli-init


# 创建 vue 项目
$ vue init webpack vue-demo

Project name my-project               --项目的名称，直接默认回车
Project description 泽泽测试Demo       --项目描述，直接默认回车
Author zeze                           --作者姓名，输入名字（zeze）回车
Install vue-router? Yes               --是否安装路由，输入y回车
Use ESLint to lint your code? No      --是否用ESLint规范代码，输入n回车
Set up unit tests No                  --是否需要单元测试，输入n回车
Setup e2e tests with Nightwatch? No   --是否需要单元测试，输入n回车

# 进入项目
$ cd vue-demo

# 安装依赖
$ yarn

# 启动项目
$ npm run dev

# 访问
http://localhost:8081

```