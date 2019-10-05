/*global $ , alert ,console*/
$(function () {
    'use strict';
    var header = $('.header');
    // start resize
    $(window).resize(function () {
        $('.intro').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.intro').height()) / 2);
            $('.intro').each(function () {
                $(this).css('paddingLeft', ($(window).width() - $('.intro').width()) / 2);
            });

        });
    });


    // End resize


    //start intro center
    $('.intro').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.intro').height()) / 2);
    });

    $('.intro').each(function () {
        $(this).css('paddingLeft', ($(window).width() - $('.intro').width()) / 2);
    });
    //End entro center

    //Start fix-menu
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 150) {
            $('.nav').addClass('fixed-menu').removeClass('nav');
        } else {
            $('.fixed-menu').removeClass('fixed-menu').addClass('nav');
        }
    });

    //End fix-menu
                            //    var topAbout = $('.about').offset().top;
                            //    $(window).on('scroll', function () {
                            //        if ($(window).scrollTop() > topAbout) {
                            //            $('.menu .active').removeClass('active');
                            //            $('.ab').addClass('active');
                            //        } else {
                            //            $('.ab').removeClass('active');
                            //        }
                            //    });

    $('.header li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('toggle')).offset().top
        }, 1000);
    });
    
    $('.header li a ').click(function () {
   
             $(this).addClass('skin-color').parent().siblings().find('a').removeClass('skin-color');
    });

    /*start change color*/
    $('.ch-color li').on('click', function () {
        $('body').attr('data-main-color', $(this).data('color'));

    })
    $('.close-color-panel ').on('click', function () {
        $('.ch-color').fadeToggle();

    });
    $('.fix-mnu-clo').each(function () {
        $(this).css('top', ($(window).height() - $(this).height()) / 2);
    });
    /*end change color*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $('.header').height() / 4) {
            $('.scrollup').css('display', 'block');
        } else {
            $('.scrollup').css('display', 'none');
        }
    });
    $('.scrollup').on('click', function () {
        $('html ,body').animate({
            scrollTop: 0
        }, 500);
    });
    
    $('.nav-header').on('click',function(){
        $('.responsive ').fadeToggle();

    });
    /*Start spical-menu*/
    $('.special-box .img-item:first').fadeOut();
////    $('.special-box .img-item').animate({
////        left: -320
////    }, 1000, function () {
////        $('.special-box .img-item:last').removeClass('hidden');
//
//    });

    /*End spical-menu*/
    $('.img-gallary ').on('click',function(){
        
       $('.popup').fadeIn();
    });
    
$('.popup ').on('click',function(){
  
    $(this).fadeOut();
    
});
 $('.inner').on('click',function(e){
    e.stopPropagation();
    
 });
    
 $('.close').on('click',function(){
        $('.popup').fadeOut();
    
 });
    $('.slick-track li').on('click',function(){
       $(this).addClass('skin-back-col').siblings().removeClass('skin-back-col');
    });

   
    
    $('#Container').mixItUp();
});


