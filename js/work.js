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

// Encuentra el modal 1 por su ID
var modal1 = document.getElementById("miModal1");


// Encuentra el botón "cerrar" en el modal 1
var closeBtn1 = modal1.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón "cerrar" del modal 1, cierra el modal 1
closeBtn1.onclick = function() {
  modal1.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal 1, cierra el modal 1
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

// Función para mostrar el modal 1
function showModal1() {
  modal1.style.display = "block";
}


// Encuentra el modal 2 por su ID
var modal2 = document.getElementById("miModal2");

// Encuentra el botón "cerrar" en el modal 2
var closeBtn2 = modal2.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón "cerrar" del modal 2, cierra el modal 2
closeBtn2.onclick = function() {
  modal2.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal 2, cierra el modal 2
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
function showModal2() {
  modal2.style.display = "block";
}


// Encuentra el modal 3 por su ID
var modal3 = document.getElementById("miModal3");

// Encuentra el botón "cerrar" en el modal 3
var closeBtn3 = modal3.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón "cerrar" del modal 3, cierra el modal 3
closeBtn3.onclick = function() {
  modal3.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal 3, cierra el modal 3
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// Función para mostrar el modal 3
function showModal3() {
  modal3.style.display = "block";
}
var modal4 = document.getElementById("miModal4");
var closeBtn4 = modal4.getElementsByClassName("close")[0];

closeBtn4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

function showModal4() {
  modal4.style.display = "block";
}


