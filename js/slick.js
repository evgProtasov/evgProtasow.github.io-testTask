
$('.slick-slider').slick({ 
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    // autoplay: true,
    prevArrow: $('.button-prev'),
    nextArrow: $('.button-next'),     

    // arrows: true,
    responsive: [
        {
          breakpoint: 1123,
          settings: {
            slidesToShow: 2            
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1
          }
        }
      ]
})