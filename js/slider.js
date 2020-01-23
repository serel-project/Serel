
$(document).ready(function(){
    $('.center').slick({
    centerMode: true,
    centerPadding: '400px',
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,
    prevArrow: '<span class="prevarrow"><img src="c:/Serel/assets/img/prev.svg"></span>',
    nextArrow: '<span class="nextarrow"><img src="c:/Serel/assets/img/next.svg"></span>',
    appendArrows: $('.arrow'),
    responsive: [
      {
        breakpoint: 1400,
        arrows: true,
        settings: {
          centerMode: true,
          centerPadding: '150px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '200px',
          slidesToShow: 1
        }
      }
    ]
  });
});