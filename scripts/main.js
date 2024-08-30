
var previousScroll = 0;
$(window).scroll(function(event){
   var scroll = $(this).scrollTop();
   if (scroll > 150){
        $('.title').hide(300);
   } else {
        $('.title').show(300);
   }
   previousScroll = Math.max(200, scroll);
});