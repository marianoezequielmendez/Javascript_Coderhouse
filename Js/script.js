// Se agregarons los eventos de 'Change' y 'Submit' al final del archivo.

// VARIABLES
let altura;
let peso;
let genero;
let valorGenero = 0;
let resultado;

//DOM
let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let resultados = document.getElementById("resultados");
let infoAltura = document.getElementById("height");
let infoPeso = document.getElementById("weight");
let opcionesGeneros = document.getElementById("opcionesGeneros");

// CLASES
class Dato {
  constructor(altura, peso, genero, resultado) {
    this.altura = altura;
    this.peso = peso;
    this.genero = genero;
    this.resultado = resultado;
  }
}

// FUNCIONES
let asignaValores = (e) => {
  e.preventDefault();

  altura = infoAltura.value;
  peso = infoPeso.value;

  infoAltura.value = "";
  infoPeso.value = "";

  llamarFunciones();
};

let valorarGenero = (genero) => {
  // Asigna un puntaje al género.
  if (genero == "Hombre") {
    valorGenero = 1.5;
  } else if (genero == "Mujer") {
    valorGenero = 1.2;
  } else if (genero == "Otro") {
    valorGenero = 1.5;
  }
};

let calcularVolumen = (altura, peso, valorGenero) => {
  // Calcula el volumen total del agua a tomar, según parámetros.
  // Genera objeto con datos.
  resultado = ((altura / peso) * valorGenero).toFixed(2);
  dato = new Dato(altura, peso, genero, resultado);

  if (altura == "" || peso == "" || genero == undefined) {
    mensaje.innerHTML = `Por favor, ingrese todos los datos necesarios.`;
  } else {
    mensaje.innerHTML = `Usted debe beber ${resultado}lts de agua por día.`;
    let informacion = `Altura: ${dato.altura}<br>
    Peso: ${dato.peso}<br>
    Género: ${dato.genero}<br>
    Cantidad de agua: ${dato.resultado}lts.`;

    creacionDOM(informacion);
  }
};

let creacionDOM = (datos) => {
  let p = document.createElement("p");
  p.className =
    "d-flex justify-content-center my-2 bg-primary bg-gradient rounded-1 text-light p-3";
  p.innerHTML = `${datos}`;
  resultados.append(p);
};

let llamarFunciones = () => {
  valorarGenero(genero);
  calcularVolumen(altura, peso, valorGenero);
};

//Eventos
opcionesGeneros.addEventListener(
  "change",
  () =>
    (genero = document.querySelector("#opcionesGeneros input:checked").value)
);

formulario.addEventListener("submit", asignaValores);
