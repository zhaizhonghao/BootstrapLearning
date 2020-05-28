# 学到的零散的知识点
* JS中自动运行的匿名函数
```js
    $(function(){
        //JS文件被载入时，从这里开始执行
    });
```
* 窗体初始化时触发
```js
    $(window).trigger("resize");
```
* 使用JQuery拿到窗体的宽度
```js
    let clientW = $(window).width();
```
* 使用JQuery拿到界面中的标签元素（单个或多个元素）
```js
    //拿到界面id="my_carousel"元素中的所有class="item"的元素
    let $allItems = $("#my_carousel .item");
```
* 遍历所有集合元素
```js
        //4.遍历
        $allItems.each(function(index,item){

        })
```
* 使用JQuery获取或设置界面元素标签中包含data-[数据名]
```js
    //界面
    <div class="item active" data-sm-img="imgs/slider01_640x340.jpg" data-lg-img="imgs/slider01_2560x400.jpg">
    </div>
    //后台
    //获取data-lg-img的值
    let url = $(item).data("lg-img")
    //设置data-sm-img的值
    $(item).data("lg-img","imgs/slider01_640x340.jpg")

```
* 使用JQuery修改界面某个元素的css样式
```js
    $(item).css({
        backgroundImage:imgUrl
    });
```

* 使用JQuery向标签内部添加标签元素
```js
    //直接添加
    let $img = "<img src='"+src+"'>";
    $(item).append($img);
    //清空标签内的元素
    $(item).empty();
    //先清空标签，在添加
    let $img = "<img src='"+src+"'>";
    $(item).empty().append($img);
```