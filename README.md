# 从index.html中学到的零散的知识点
* 浏览器适配
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
* 视口
```html
<!-- 视口用于同时适配PC端、手机端和平板，因为不知道具体的设备宽度，所以这里用content="width=device-width -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```
* 网页的icon设置
```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```
* 一个门户网站界面body内的基本结构
```html
    <header id="my_header"></header>
    <section></section>
    <section></section>
    ...
    <section></section>
    <footer id="my_footer"></footer>
```
* Bootstrap的栅格系统
## 第一步：从bootstrap的起步中，下载代码的模板
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
    <!-- 站点图标 -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  </head>
  <body>
    <h1>你好，世界！</h1>
    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```
其中，
`<meta http-equiv="X-UA-Compatible" content="IE=edge">`是浏览器的支持配置。
`<meta name="viewport" content="width=device-width, initial-scale=1">`叫视口，用来将页面变为相应式的，及缩放窗口，自动地布局元素，而不会让它们都挤在一起。因此，该界面也可以支持移动端的显示。
`content="width=device-width`表示页面的宽度为设备的宽度（因为，存在不同类型的设备，所以，无法知道每个设备的宽度）
下面的代码，表示指定站点的图标
`  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`
## 第二步：搭建页面的这个架子
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
    <!-- 站点图标 -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  </head>
  <body>
    <!-- 头部 -->
    <header id="my_header">
      头部
    </header>
    <!-- 轮播图 -->
    <section id="my_carousel">
    </section>
    <!-- 关于我们 -->
    <section id="my_about">
    </section>
    <!-- 产品特色 -->
    <section id="my_product">
    </section>
    <!-- 热门课程 -->
    <section id="my_hot">
    </section>
    <!-- 友情链接 -->
    <section id="my_link">
    </section>
     <!-- 友情链接 -->
    <footer id="my_footer"></footer>
    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```
## 第三部分：使用栅格系统对每个部分进行布局和填充
Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统(container)，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的预定义类，还有强大的mixin 用于生成更具语义的布局。
主要看栅格参数
在理解栅格系统之前，必须了解[**布局容器**](https://v3.bootcss.com/css/#grid)的概念
* 如果栅格里只设置了一个屏幕的设置，那么，其他的没设置的会和这个默认保持一致，如下
```html
      <div class="container">
        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-4"></div>
        </div>
      </div>
```
* badge标签是徽章

* style里面的cursor：pointer表示鼠标停留上面会有小手显示

* 栅格布局还可以嵌套使用，例如下面,这样可以灵活地来布局
```html
    <div class="container">
      <div class="row" style="padding-top: 20px;">
        <div class="col-md-3 col-md-offset-1 one">
          <div class="row">
            <ul class="col-md-6 ">
              <li><a href="">关于我们</a></li>
              <li><a href="">课程介绍</a></li>
              <li><a href="">热门课程</a></li>
            </ul>
            <ul class="col-md-6">
              <li><a href="">名师授课</a></li>
              <li><a href="">课堂活动</a></li>
              <li><a href="">联系我们</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 two">
          <h5>公司地址：上海市松江区松江大学城</h5>
          <h5>联系电话：188888888</h5>
          <h5>地址邮箱：12312312@qq.com</h5>
        </div>
        <div class="col-md-3 three">
          <h5>联系我们</h5>
          <a href="">
            <img src="imgs/weixin.png" alt="" width="50px"  data-toggle="tooltip" data-placement="bottom" title="关注微信">
            <img src="imgs/weibo.jpg" alt="" width="50px" data-toggle="tooltip" data-placement="bottom" title="关注微博">
          </a>
        </div>
      </div>
    </div>
```

* 




