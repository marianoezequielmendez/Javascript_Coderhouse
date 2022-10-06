//Se agrego API de clima. https://open-meteo.com/ Línea 34

// VARIABLES
let altura;
let peso;
let genero;
let valorGenero = 0;
let resultado;
let localStorage_id;
const DateTime = luxon.DateTime;
const dt = DateTime.now();
const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=-34.6118&longitude=-58.4173&hourly=temperature_2m&current_weather=true";

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

// APIs
const fetchingTemp = async () => {
  const resp = await fetch(API_URL);
  const data = await resp.json();

  let temperaturas = data.hourly.temperature_2m;
  return temperaturas[getRandomInt(temperaturas.length)];
};

const Temperatura = () => {
  return new Promise(async (resolve, reject) => {
    resolve(fetchingTemp());
  });
};

// FUNCIONES
function getRandomInt(max) {
  // Genera un número random entre 0 y max
  return Math.floor(Math.random() * max);
}

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
  valorGenero = genero == "Hombre" ? 1.5 : genero == "Mujer" ? 1.2 : 1.3;

  return valorGenero;
};

let calcularVolumen = (altura, peso, valorGenero) => {
  // Calcula el volumen total del agua a tomar, según parámetros.
  // Genera objeto con datos.
  resultado = ((altura / peso) * valorGenero).toFixed(2);
  dato = new Dato(altura, peso, genero, resultado);

  if (altura == "" || peso == "" || genero == undefined) {
    mensaje.innerHTML = `Por favor, ingrese todos los datos necesarios.`;
  } else {
    Temperatura().then((res) => {
      mensaje.innerHTML = `Usted debe beber ${resultado}lts de agua por día.`;
      let informacion = `Altura: ${dato.altura}<br>
      Peso: ${dato.peso}<br>
      Género: ${dato.genero}<br>
      Cantidad de agua: ${dato.resultado}lts.<br>
      Temperatura actual: ${res} C°<br>
      Fecha: ${dt.toLocaleString()} - ${dt.toLocaleString(
        DateTime.TIME_SIMPLE
      )}`;

      creacionDOM(informacion);
    });
  }
};

let creacionDOM = (datos) => {
  let p = document.createElement("p");
  p.className =
    "d-flex justify-content-center my-2 bg-primary bg-gradient rounded-1 text-light p-3";
  p.innerHTML = `${datos}`;
  resultados.append(p);
  localStorage.setItem(`${localStorage_id}`, `${datos}`);
  localStorage_id++;
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

// Inicio
window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    let p = document.createElement("p");
    p.className =
      "d-flex justify-content-center my-2 bg-primary bg-gradient rounded-1 text-light p-3";

    p.innerHTML = `${localStorage.getItem(localStorage.key(i))}`;

    resultados.append(p);
    localStorage_id = parseInt(localStorage.key(i));
  }

  localStorage_id == undefined ? (localStorage_id = 0) : localStorage_id++;
};
