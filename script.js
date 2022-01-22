

$(function(){

    $(".js-accordion-title").on("click",function(){
        $(this).next().slideToggle(300)

        $(this).toggleClass("open",300);
    })
})


$(function(){
    let pagetop = $("#topbtn");

    pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
         pagetop.fadeIn();
    } else {
         pagetop.fadeOut();
    }
 });
    pagetop.click(function(){
        $("body,html").animate({scrollTop: 0},500);
        return false
    })
});