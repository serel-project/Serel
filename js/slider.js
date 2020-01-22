
$(document).ready(function(){
    $('.center').slick({
    centerMode: true,
    centerPadding: '400px',
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        arrows: false,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});