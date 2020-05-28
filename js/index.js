$(function(){
    $(window).on("resize",function(){
        //1.获取窗口的宽度
        let clientW = $(window).width();
        console.log(clientW);

        //2.设置临界值
        let isShowBigImage = clientW >= 800;

        //3.获取所有的滚动图片的div
        let $allItems = $("#my_carousel .item");

        //4.遍历
        $allItems.each(function(index,item){
            //取出图片的路径
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("'+src+'")';

            //设置背景
            $(item).css({
                backgroundImage:imgUrl
            });

            //设置img标签
            if(!isShowBigImage){
                let $img = "<img src='"+src+"'>";
                $(item).empty().append($img);
            }else{
                $(item).empty();
            }
        })
    });

    $(window).trigger("resize");
});