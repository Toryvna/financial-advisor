$(document).ready(function(){
    //open/close sidebar
    $('.toggle-menu').on('click', function(){
        $('.sidebar').addClass('show');
    });
    $('.closeSidebar').on('click', function(){
        $('.sidebar').removeClass('show');
    });

    //open tooltip
    $('.tooltip').on('click', function(ev){
        $(this).toggleClass('active');
        $(this).parent().parent().find('.tooltip_hidden').toggleClass('active');
        // if (screen.width > 1023 ) {
        //     var x = ev.clientX ;
        //     $(".tooltip_hidden").css('left', x - 30);
        // }
    });
    $('.close-tooltip').on('click', function(){
        $(this).parent().removeClass('active');
        $(this).parent().parent().find('.tooltip').removeClass('active');
    });

});