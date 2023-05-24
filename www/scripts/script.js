$(document).ready(function(){

  //menu

  $('.j-burger').click(function(event) {
    $('.j-burger,.j-menu').toggleClass('active');
    $('body').toggleClass('locked');
  });


  //reviews

  $('.js-slider').slick({
    centerMode: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,

  });

});
