var child=".child";
$(child).hide();
$(".menu").hover(function(){
    $(child,this).stop().slideDown(300)},function(){
            $(child,this).stop().slideUp(300)
});

$(".top-btn").on('click',function(){
    $("html,body").animate({scrollTop:0},"700");
});

$(".hanburger").on('click',function(){
    $(this).toggleClass("active")
    $(".menu-contents").toggleClass("open")
});

//上手く動かない↓
$(".top-message").hide();
$(".top").click(function(){
    $(".top-message").stop().slideUp(500);
});