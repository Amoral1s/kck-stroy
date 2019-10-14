$(document).ready(function () {

  $('#menu').click(function () { 
    $(this).toggleClass('menu-active');
    $('.header-nav ul.container').toggleClass('nav-menu-active');
    $('.header-nav ul.container').slideToggle(600);
   });

  $('.header-nav ul li:has(ul)').addClass('has-children');

  $('li.has-children').click(function() {
    $(this).children('ul').slideDown(500);
  });

  $('li.has-children').mouseenter(function() {
    $(this).children('ul').slideDown(500);
  });
  
  $('.has-children').mouseleave(function() {
    $(this).children('ul').slideUp(500);
  });
  
  if($(window).width() < 768) {

    $('.feedback-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
        arrows: true,
        dots: true,
        autoplay: false,
        autoplayspeed: 3000,
        speed: 500
      });
    } else {

      $('.feedback-wrap').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
          arrows: true,
          dots: true,
          autoplay: false,
          autoplayspeed: 3000,
          speed: 500
        });

    }



});