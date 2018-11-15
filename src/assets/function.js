import $ from 'jquery';

$(document).scroll(function () {
    let sTop = $(this).scrollTop();
    let ft = $("#app").offset().top + 40;
    
    if (sTop > ft) {
        $('#nav').css({'background-color':'#fff','box-shadow':'0 2px 12px rgba(0,0,0,.18)','z-index': '8'});
        $('.logo-item').css('color','rgba(0,0,0,.54)');
        $('.nav-items').css('color','rgba(0,0,0,.54)');
    }
    if (sTop < ft) {
        $('#nav').css({'background-color':'transparent','box-shadow':'none'});
        $('.logo-item').css('color','#fff');
        $('.nav-items').css('color','#fff');
    }
});
