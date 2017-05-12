## 一、开发背景

为了全面的熟悉Vue+Vue-router+Vuex+axios技术栈，结合V2EX的开放API开发了这个简洁版的V2EX。

## 二、项目优势

* 界面设计简洁
* 沉浸式的阅读体验
* 可以按文章/用户/分类浏览
* 在文章页显示用户评论
* 总之，实现了你看帖所需要的一切
* 项目基于Vue全家桶
* 感兴趣的欢迎给颗star ^_^
* ...

## 三、项目安装

项目兼容IE9+，使用项目前，请确保安装好了NodeJS。

```

git clone https://github.com/bergwhite/v2ex-vue.git  // 克隆项目
cd v2ex-vue  // 进入项目目录
npm install  // 安装依赖
npm run dev  // 运行项目

```

## 四、解决方案

### 4.1 跨域方案

通过配置代理表实现跨域

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

### 4.2 Vuex支持IE

直接引入Vuex无法在IE中显示

```

npm install babel-polyfill --save-dev  // 安装babel-polyfill

src/main.js
---------------
import 'babel-polyfill'  // 在vue主文件中导入

```