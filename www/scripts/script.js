$(document).ready(function() {

  //menu

  $('.j-burger').click(function(e) {
    $('.j-burger,.j-menu').toggleClass('active');
    $('body').toggleClass('locked');
  });


  //slider

  $('.js-slider').slick({
    centerMode: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });


  //tabs

  $('.j-tab-link').on('click', function(e) {
    e.preventDefault();

    let index = $(this).index('.j-tab-link');

    $('.j-tab-link').removeClass('active');
    $('.j-tab-link').eq(index).addClass('active');

    $('.j-tab-content').removeClass('active');
    $('.j-tab-content').eq(index).addClass('active');
  });


  //faq

  $('.j-faq-btn').click(function(e) {
    $('.j-faq-btn').not(this).removeClass('active');
    $('.j-faq-text').not($(this).next()).slideUp();
    $(this).toggleClass('active').next().slideToggle();
  });


  // $('.faq-btn').click(function(e) {
  //   if($('.faq-content').hasClass('faq-one')) {
  //     $('.faq-btn').not(this).removeClass('active');
  //     $('.faq-text').not(this).next().slideUp();
  //   };
  //   $(this).toggleClass('active').next().slideToggle();
  // });



  // $('.faq-btn').click(function(){
  //   const parent = $(this).parent();
  //   if (parent.hasClass('active')) {
  //       parent.removeClass('active');
  //   } else {
  //       $('.faq-accordion').removeClass('active')
  //       parent.addClass('active');
  //   };
  //   $('.faq-accordion .active').closest('.faq-btn::after').css("display", "none");
  // });

});


