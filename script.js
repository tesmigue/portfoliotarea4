function myFunction(imgs) {
    // obtener la imagen expandida
    var expandImg = document.getElementById("expandedImg");
    // obtener el texto de la imagen
    var imgText = document.getElementById("imgtext");
    // misma imagen al clickear
    expandImg.src = imgs.src;
    // el texto es el alt
    imgText.innerHTML = imgs.alt;
    // container de la imagen expandida
    expandImg.parentElement.style.display = "block";
}
//icono navegacion

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll secciones
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
let btn=document.querySelector('.btn');
//barra navegacion cambio
window.onscroll=() =>{
    //navegacion sticky
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    sections.forEach(section=>{
        let top=window.scrollY;
        let offset=section.offsetTop-100;
        let height=section.offsetHeight;
        let id=section.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    });

}

//calculadora diferencia de edad
const edadForm=document.getElementById('edadForm');
const resultadoEdad=document.getElementById('resultadoEdad');

edadForm.addEventListener('submit',function(evento){
    evento.preventDefault();
    

    const tuEdad=parseInt(document.getElementById('tuEdad').value);

    const edadDueño=21;
    const diferencia=Math.abs(tuEdad-edadDueño);

    //resultado
    alert("la diferencia de edad entre tu y el dueño de la pagina es de ${diferencia} años");
});

//calculadora de costo total
const costoForm=document.getElementById('costoForm');
const resultadoCosto=document.getElementById('resultadoCosto');

costoForm.addEventListener('submit',function(evento){
    evento.preventDefault();
    

    const precioUnitario=parseFloat(document.getElementById('precioUnitario').value);
    const cantidad=parseInt(document.getElementById('cantidad').value);

    const costoTotal=precioUnitario*cantidad;

    //resultado
    alert("El costo total es de ${costoTotal}");
});

//calculadora simple
const calculadoraForm=document.getElementById('calculadoraForm');
const resultadoCalculadora=document.getElementById('resultadoCalculadora'); 

document.getElementById("calculadoraForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const operador = document.getElementById("operador").value;
    const numero2 = parseFloat(document.getElementById("numero2").value);
  
    let resultado;
  
    switch (operador) {
      case "suma":
        resultado = numero1 + numero2;
        break;
      case "resta":
        resultado = numero1 - numero2;
        break;
      case "multiplicacion":
        resultado = numero1 * numero2;
        break;
      case "division":
        if (numero2 !== 0) {
          resultado = numero1 / numero2;
        } else {
          alert("Error: No se puede dividir por cero.");
          return; // Evita mostrar el resultado en caso de división por cero
        }
        break;
      default:
        alert("Operador no válido.");
        return; // Evita mostrar el resultado en caso de operador no válido
    }
  
    alert(`El resultado es: ${resultado}`);
});


//boton formulario
const formulario=document.getElementById('miFormulario');

//mensaje de exito
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    mostrarMensajeDeExito();
});

//funcion mostrar mensaje
function mostrarMensajeDeExito(){
    const mensaje="Mensaje enviado con exito";
    alert(mensaje);
    //elemento mensaje
    /*const mensajeElemento=document.createElement('div');
    mensajeElemento.textContent=mensaje;
    mensajeElemento.classList.add('mensaje-exito');

    const seccionContacto=document.getElementById('Contacto');
    seccionContacto.appendChild(mensajeElemento);*/
}

