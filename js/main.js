$(document).ready(function () {
  $(".tab").on("click",function (){
    $(this).addClass("is-active").siblings().removeClass("is-active");
    var indicater =  $(".tab-indicater");
    var tapPosition = $(this).position();
    indicater.css({
      left: tapPosition.left +'px',
    });
  });
});