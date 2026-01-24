$(document).ready(function(){
  $('.photos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false
  });
});

AOS.init();