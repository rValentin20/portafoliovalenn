let nubevideo = document.getElementById('nubevideo');
let valen = document.getElementById('valen');
let nubeabajo = document.getElementById('nubeabajo');
let burbujas = document.getElementById('burbujas');

window.addEventListener('scroll', function() {
  let value = window.scrollY;

  if (window.innerWidth >= 992) {
    nubevideo.style.top = value * 0.8 + 'px';
  } else {
    nubevideo.style.top = value * 0 + 'px';
  }

  valen.style.left = value * -0.6 + 'px';
  nubeabajo.style.top = value * 0.3 + 'px';
  burbujas.style.left = value * 2 + 'px';
});



$('.slider').slick({
    centerMode: true,
    dots: true,
    autoplay: true,
    arrows: false,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        Infinity: true,
        slidesToShow: 1,
        }
    },
    {
        breakpoint: 500,
        settings: {
        arrows: false,
        centerMode: true,
        dots: true,
        centerPadding: '40px',
        Infinity: true,
        slidesToShow: 1
        }
    }
    ]
});


