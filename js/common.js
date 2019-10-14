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

    var facture = $('.input-facture'),
    size = $('.input-1'),
    light = $('.input-3'),
    price = $('.cost_num'),
    summ = (+facture.val() * ((+size.val() * basePrice) + (+light.val() * baseLight))),
    basePrice = 440,
    baseLight = 260;
    
    
    facture.change(function(event) {
			summ = (+facture.val() * ( (+size.val() * basePrice) + (+light.val() * baseLight) ));
		});
    size.change(function(event) {
			summ = (+facture.val() * ( (+size.val() * basePrice) + (+light.val() * baseLight) ));
		});
    price.change(function(event) {
			summ = (+facture.val() * ( (+size.val() * basePrice) + (+light.val() * baseLight) ));
		});

    $('.final-cost').on('click', function() {
      price.text(summ);
    });

  

    $('.design-buttons-photo').click(function(){
      $('.design-photo').addClass('photo-active');
      $('.design-color').removeClass('photo-active');
    });
    $('.design-buttons-color').click(function(){
      $('.design-photo').removeClass('photo-active');
      $('.design-color').addClass('photo-active');
    });

});