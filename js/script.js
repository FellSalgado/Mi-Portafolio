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

window.addEventListener('scroll', function()  {
    let element = document.getElementById('scroll-content');
    let screenSize = window.innerHeight;
  
    if(element.getBoundingClientRect().top < screenSize) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
});