# 学到的零散的知识点
* 使用icomoon图标的方法(先去该官网中下载想要的图标，然后，使用@font-face来配置，在界面上直接使用)
```css
@font-face
{
font-family: icomoon;
src: url('../fonts/icomoon.eot') format('embeded-opentype'),
url('../fonts/icomoon.svg') format('svg'),
url('../fonts/icomoon.ttf') format('truetype'),
url('../fonts/icomoon.woff') format('woff');
} 
/*模糊匹配*/
[class^="icon-"],
[class*=" icon-"]{
    font-family: icomoon;
    font-style: normal;
}
/*图标对应的编码直接拿过来使用*/
.icon-phone::before{
    content: '\e938';
    font-size: 13px;
}
```

* 界面的上元素的z方向的层次,z-index越高，表示图层越在上面，越不会被覆盖
```css
    z-index: 9999;
```
* 插入图片时，应该是将图片放入框内（使用backgroundImage），这里不是先将图片缩放，然后再放到框内。而是，使用框在图片上移动，下面就是将框放在图片的正中间的方法。
```css
#my_carousel .item{
    background: no-repeat center center;
    -webkit-background-size : cover;
    background-size: cover;
}
```
下面的代码cover表示把背景图片放大到适合元素容器的尺寸，图片比例不变，但是要注意，超出容器的部分可能会裁掉。
100%表示按容器比例撑满，图片变形；
```css
    background-size：100% 100%;
    background-size: cover;
}
```
* a和a:hover区别
a就是a标签呈现时候的样式，a:hover表示鼠标停留在上面才会触发的样式
```css
    #my_header .navbar-my .navbar-nav li.active a,
    #my_header .navbar-my .navbar-nav li a:hover{
        background-color: transparent;
        border-bottom: 2px solid #337ab7;
    }
```
* 文字居中
```css
    <div class="title text-center">
            <h1><strong>关于我们</strong></h1>
    </div>
```

* text-muted表示字体颜色是灰色的
