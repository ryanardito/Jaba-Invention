$(window).scroll(function(){
    $background = $('.parallax');
    $wScroll = $(window).scrollTop();
    $bg_dest = $('.bg-destination').offset().top;
    
    //console.log($wScroll-$bg_dest);
    $background.css({'margin-top': ($wScroll-$bg_dest)*0.2+'px'})
})