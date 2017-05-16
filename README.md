## 一、开发背景

为了全面的熟悉Vue+Vue-router+Vuex+axios技术栈，结合V2EX的开放API开发了这个简洁版的V2EX。 [在线预览](http://47.93.252.247:8080/#/)

API来自官方以及[djyde](https://github.com/djyde/V2EX-API)的整理。

## 二、项目演示

分类页

![topic](http://atmp.oss-cn-qingdao.aliyuncs.com/img/topic.gif)

文章页 & 用户页

![article & user](http://atmp.oss-cn-qingdao.aliyuncs.com/img/article%26user.gif)

懒加载

![lazyLoad](http://atmp.oss-cn-qingdao.aliyuncs.com/img/lazyLoad.gif)

> 路由

首页默认显示最新的帖子

* 首页 /
* 全部 /topic
* 分类 /topic/:name
* 文章 /article/:id
* 用户 /user/:name

## 三、项目优势

* 界面设计简洁
* 沉浸式的阅读体验
* 可以按分类/文章/用户浏览
* 在文章页显示用户评论
* 图片使用懒加载模式
* 总之，实现了你看帖所需要的一切
* 项目基于Vue全家桶
* 适配移动端
* 有完善的文档注释
* 有疑问欢迎提交issue
* 感兴趣的欢迎给颗star ^_^
* ...

## 四、项目缺陷

* 不支持翻页（没有找到翻页的API）
* 在线演示首次加载较慢（为了能跨域显示最新内容，直接用npm run dev部署的）
* 打算使用nginx部署，但是在代理的时候遇到了问题（https部署成功，反向代理失败）
* 配置文件在下面，希望大家帮忙看看问题在哪
* ...

```

server {
    listen    80;
    listen    443;
    server_name localhost;
    ssl on;
    ssl_certificate /etc/nginx/ssl/nginx.crt;
    ssl_certificate_key /etc/nginx/ssl/nginx.key;
    location /api/ {
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass https://www.v2ex.com/api/;
    }
}

```

## 五、项目安装

项目兼容IE9+，使用项目前，请确保安装好了NodeJS。

```

git clone https://github.com/bergwhite/v2ex-vue.git  // 克隆项目
cd v2ex-vue  // 进入项目目录
npm install  // 安装依赖
npm run dev  // 运行项目

```

## 六、解决方案

### 6.1 跨域方案

本地开发中，通过配置代理表实现跨域

```

config/index.js
-------------------
proxyTable: {
  '/api': {
    target: 'https://www.v2ex.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api'
    }
  }
}

```

### 6.2 Vuex支持IE

直接引入Vuex无法在IE中显示，引入babel-polyfill来兼容IE

```

npm install babel-polyfill --save-dev  // 安装babel-polyfill

src/main.js
---------------
import 'babel-polyfill'  // 在vue主文件中导入

```

PS：正在找工作，北京有坑的欢迎联系