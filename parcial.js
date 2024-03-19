$('#myCarouselCustom').carousel()
function cambiarContenido() {
    var elemento = document.getElementById("contenido");
    if (elemento.innerHTML.includes("Este es el texto original")) {
      elemento.innerHTML = `<p>Las características principales de un texto son la coherencia, cohesión y adecuación.
       Existen diferentes tipos de texto como narrativo, informativo, instructivo y argumentativo.
        Un texto consta de varios componentes como título, introducción, desarrollo y conclusión</p>`;
    } else {
      elemento.innerHTML = `<p>Este es el texto original</p>
                           <p>Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original.</p>
                           <p>El texto es la unidad superior de comunicación y de la competencia organizacional el hablante. Su extensión es variable y corresponde a un todo comprensible que tiene una finalidad comunicativa en un contexto dado. El carácter comunicativo, pragmático y estructural permiten su identificación.</p>`;
    }
  }

  function cambiarColor() {
    var cuerpo = document.body;
    var colorTexto = getRandomColor();
    var colorFondo = getRandomColor();

    cuerpo.style.color = colorTexto;
    cuerpo.style.backgroundColor = colorFondo;
  }

  function getRandomColor() {
    var letras = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const acordeon = document.getElementsByClassName('contenedor');

  for (i=0; i<acordeon.length; i++) {
    acordeon[i].addEventListener('click', function () {
      this.classList.toggle('activa')
    })
  }