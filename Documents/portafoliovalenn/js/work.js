var $st = $('.pagination');
var $slickEl = $('.center');

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st.text(i + ' of ' + slick.slideCount);
});

$slickEl.slick({
  autoplay: true,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  focusOnSelect: true,
  dots: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
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


var modal1 = document.getElementById("miModal1");
var closeBtn1 = modal1.getElementsByClassName("close")[0];

closeBtn1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

function showModal1() {
  modal1.style.display = "block";
}

var modal2 = document.getElementById("miModal2");

var closeBtn2 = modal2.getElementsByClassName("close")[0];

closeBtn2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
function showModal2() {
  modal2.style.display = "block";
}

var modal3 = document.getElementById("miModal3");

var closeBtn3 = modal3.getElementsByClassName("close")[0];

closeBtn3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// Función para mostrar el modal 3
function showModal3() {
  modal3.style.display = "block";
}
var modal5 = document.getElementById("miModal5");
var closeBtn5 = modal5.getElementsByClassName("close")[0];

closeBtn5.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

function showModal5() {
  modal5.style.display = "block";
}

var modal6 = document.getElementById("miModal6");
var closeBtn6 = modal6.getElementsByClassName("close")[0];

closeBtn6.onclick = function() {
  modal6.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

function showModal6() {
  modal6.style.display = "block";
}
var modal7 = document.getElementById("miModal7");
var closeBtn7 = modal7.getElementsByClassName("close")[0];

closeBtn7.onclick = function() {
  modal7.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}

function showModal7() {
  modal7.style.display = "block";
}
var modal8 = document.getElementById("miModal8");
var closeBtn8 = modal8.getElementsByClassName("close")[0];

closeBtn8.onclick = function() {
  modal8.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}

function showModal8() {
  modal8.style.display = "block";
}
var modal9 = document.getElementById("miModal9");
var closeBtn9 = modal9.getElementsByClassName("close")[0];

closeBtn9.onclick = function() {
  modal9.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}

function showModal9() {
  modal9.style.display = "block";
}

