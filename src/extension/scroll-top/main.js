;(function($) {
    'use strict';

    var $btnScrolltop = $('.btn-scrolltop')
    var $window = $(window)
    var limitHeight = $('.sidebar').height() / 2

    var IS_ANIMATING = false

    $btnScrolltop.on('click', function(){
        $(this).animate({bottom: '50%',opacity: 0.1}, 300,function(){
            $(this).hide()
            $(this).css('bottom', '10%')
            $(this).css('opacity', '1')
            IS_ANIMATING = true
            $('body').animate({scrollTop: 0}, 800, function(){
                IS_ANIMATING = false
            });
        })

    })
    
    $window.scroll(function(){
        if (IS_ANIMATING)
            return
        if ($window.scrollTop() >= limitHeight){
            $btnScrolltop.show()
        }else{
            $btnScrolltop.hide()
        }
    })

})(jQuery);