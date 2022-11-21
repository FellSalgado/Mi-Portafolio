function cambiarModo() {
    let cuerpo = document.body;
    cuerpo.classList.toggle("oscuro");
}

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* 
    cada ves que se haga click en el botón 
    agrega y quita las clases necesarias 
    para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
});

/* 
    Cuándo se haga click fuera del contenedor de enlaces 
    el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
    if (e.target.id === "nav") {
        navWrapper.classList.remove("show");
        toggleButton.classList.remove("close");
    }
});

/* parallax */
let uno = document.querySelector('.parallax');
let dos = document.querySelector('.parallax2');
let tres = document.querySelector('.parallax3');
let cuatro = document.querySelector('.parallax4');
function scrollParallax() {
    let scrollTop = document.documentElement.scrollTop;
    uno.style.transform = 'translateY('+ scrollTop * -0.4 + 'px)';
    dos.style.transform = 'translateY('+ scrollTop * -0.2 + 'px)';
    tres.style.transform = 'translateY('+ scrollTop * 0.1 + 'px)';
}

window.addEventListener('scroll', scrollParallax);

/* window.addEventListener('scroll', function()  {
    let element = document.getElementById('scroll-content');
    let screenSize = window.innerHeight;

    if(element.getBoundingClientRect().top < screenSize) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
}); */