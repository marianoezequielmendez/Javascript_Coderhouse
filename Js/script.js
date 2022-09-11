// Se agregó la función creacionDOM que va agregando items con los resultados de los calculos realizados.
// Se modifica etiqueta h2 con resultado actual del calculo.

// VARIABLES
let altura;
let peso;
let genero;
let valorGenero = 0;
let verificador = true;
let resultado;
let mostrarResultado;
let mostrarLista;
let nuevoCalculo;
let listaResultados = [];

//DOM
let mensaje = document.getElementById("mensaje");
let resultados = document.getElementById("resultados");

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
let asignaValores = () => {
  // Asigna valores iniciales
  altura = parseFloat(prompt("¿Cuál es su altura?"));
  peso = parseFloat(prompt("¿Cuál es su peso?"));
  genero = prompt(
    "¿Cuál es su género? (H(Hombre), M(Mujer), O(Otro))"
  ).toUpperCase();
};

let verificaGenero = (verificador, genero) => {
  // Verifica si el género es correcto y asigna un puntaje.
  while (verificador) {
    if (genero == "H") {
      valorGenero = 1.5;
      verificador = false;
    } else if (genero == "M") {
      valorGenero = 1.2;
      verificador = false;
    } else if (genero == "O") {
      valorGenero = 1.5;
      verificador = false;
    } else {
      genero = prompt(
        "Debé seleccionar uno de los siguientes géneros: H(Hombre), M(Mujer), O(Otro)"
      ).toUpperCase();
    }
  }
  return verificador;
};

let calcularVolumen = (altura, peso, valorGenero) => {
  // Calcula el volumen total del agua a tomar, según parámetros.
  // Guarda resultados en una lista.
  resultado = ((altura / peso) * valorGenero).toFixed(2);
  dato = new Dato(altura, peso, genero, resultado);

  let informacion = `Altura: ${dato.altura}<br>
  Peso: ${dato.peso}<br>
  Género: ${dato.genero}<br>
  Cantidad de agua: ${dato.resultado}lts.`;

  listaResultados.push(informacion);
  creacionDOM(informacion);
  return resultado;
};

let conocerResultado = () => {
  // Muestra el resultado  parcial.
  mostrarResultado = confirm("¿Desea calcular su volumen?");

  if (mostrarResultado) {
    alert(`Usted debe beber ${resultado} lts de agua por día.`);
    mensaje.innerHTML = `Usted debe beber ${resultado} lts de agua por día.`;
  } else {
    alert("Su registro quedo guardado en la lista de resultados.");
    mensaje.innerHTML = `Su registro quedo guardado en la lista de resultados.`;
  }
};

let agregarCalculo = () => {
  // Consulta por un nuevo calculo
  nuevoCalculo = confirm("¿Desea realizar otra consulta?");

  if (nuevoCalculo) {
    llamarFunciones();
  } else {
    mostrarListaResultados();
  }
};

let creacionDOM = (datos) => {
  let p = document.createElement("p");
  p.className =
    "d-flex justify-content-center my-2 bg-primary bg-gradient rounded-1 text-light p-3";
  p.innerHTML = `${datos}`;
  resultados.append(p);
};

let mostrarListaResultados = () => {
  // Muestra la lista de resultados
  mostrarLista = confirm("¿Desea ver su lista de resultados?");

  if (mostrarLista) {
    for (let res of listaResultados) {
      alert(res);
    }
  } else {
    alert("Gracias por su visita");
  }
};

let llamarFunciones = () => {
  asignaValores();
  verificaGenero(verificador, genero);
  calcularVolumen(altura, peso, valorGenero);
  conocerResultado();
  agregarCalculo();
};

// INICIO
llamarFunciones();

// FALTA POR HACER
// Agregar interacción con los botones para ir calculando el agua bebida hasta el momento.
