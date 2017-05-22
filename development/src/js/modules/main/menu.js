var $ = require('jquery');

//Display menu function
function menu_display() {
    var display_menu = true;
    console.log('menu display init');
    $('.menu_button').click(function() {
        console.log('click');
        if (display_menu === false) {
            $(".main_nav").animate({
                left: "-=390",
            }, 500);
            $(".shadow").css("display", "none");
            $(".main_nav_close_button").hide(500);
            $(".main_nav_open_button").show(500);
            display_menu = true;
        } else {
            $(".main_nav").animate({
                left: "+=390",
            }, 500);
            $(".shadow").css("display", "block");
            //$(".main_nav_close_button").css("display", "block");
            $(".main_nav_close_button").show(500);
            $(".main_nav_open_button").hide(5);
            display_menu = false;
        }
    });
}

function menu_collapse() {
    $('#cssmenu li.has-sub > a').on('click', function() {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        } else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });

    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
}

$(document).ready(function() {
    menu_display();
    menu_collapse();
});
