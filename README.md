## 一、开发背景

为了全面的熟悉Vue+Vue-router+Vuex+axios技术栈，结合V2EX的开放API开发了这个简洁版的V2EX。 [在线预览](https://47.93.252.247/#/) 

API来自官方以及[djyde](https://github.com/djyde/V2EX-API)的整理。

在线访问请节制使用，跨域是通过Nginx配置反向代理实现的，所以每小时120次API请求是算在服务器头上的（没啥说的了）。

当页面刷新后也无法显示，请查看控制台的异步请求是否返回403。如果是的话，要么你等等（很久），要么你clone这个库到本地去玩。

## 二、项目演示

分类页

![topic](http://atmp.oss-cn-qingdao.aliyuncs.com/img/topic.gif)

文章页 & 用户页

![article & user](http://atmp.oss-cn-qingdao.aliyuncs.com/img/article%26user.gif)

懒加载

![lazyLoad](http://atmp.oss-cn-qingdao.aliyuncs.com/img/lazyLoad.gif)

移动端

![mobile](http://atmp.oss-cn-qingdao.aliyuncs.com/img/mobile.gif)

> 路由

首页默认显示最新的帖子

* 首页 /
* 全部 /topic
* 分类 /topic/:name
* 文章 /article/:id
* 用户 /user/:name

> 结构

目录是cmd生成的（稍微进行了一下修改，默认的太难看了） tree /f >tree.txt

```

├─components
│    Topic.vue  // 某一分类下的文章或某个用户的全部文章
│    TopicList.vue  // 全部分类
├─router
│    index.js  // 路由
├─store
│    state.js  // 存放API地址和最近一次请求的文章和评论
│    getters.js  // 读取state的值
│    mutations.js  // 存储懒加载
│    actions.js  //  存储异步请求
│    index.js  // Vuex
├─ App.vue  // 主页面
├─ main.js  // Vue主文件

```

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
* ...

## 五、项目安装

项目兼容IE9+，使用项目前，请确保安装好了NodeJS。

```

git clone https://github.com/bergwhite/v2ex-vue.git  // 克隆项目
cd v2ex-vue  // 进入项目目录
npm install  // 安装依赖
npm run dev  // 运行项目

```

## 六、解决方案

### 6.1 本地开发跨域方案

本地开发中，通过配置代理表实现跨域。

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

### 6.2 让Vuex支持IE

直接引入Vuex无法在IE中显示，需要引入babel-polyfill。

```

npm install babel-polyfill --save-dev  // 安装babel-polyfill

src/main.js
---------------
import 'babel-polyfill'  // 在vue主文件中导入

```

### 6.3 在线部署跨域方案

通过配置Nginx反向代理实现跨域。由于是代理HTTPS，所以你需要生成SSL证书。

```

/etc/nginx/nginx.conf
------------------------------
http {
    server {
        listen    80;
        listen    443;
        server_name www.v2ex.com;
        ssl on;
        ssl_certificate /etc/nginx/ssl/nginx.crt;
        ssl_certificate_key /etc/nginx/ssl/nginx.key;
        location / {
            root   /usr/share/nginx/html;
            index  index.html;
        }
        location /api/ {
            proxy_set_header  X-Real-IP  $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass https://www.v2ex.com/api/;
        }
    }
}

```

PS：正在找工作，北京有坑的欢迎联系