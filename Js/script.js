// VARIABLES
let altura;
let peso;
let genero;
let valorGenero = 0;
let verificador = true;
let mostrarResultado;
let listaResultados= []

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
  return ((altura / peso) * valorGenero).toFixed(2);
};

let resultado = () => {
  mostrarResultado = confirm("¿Desea calcular su volumen?");

  if (mostrarResultado) {
    alert(
      `Ustede debe beber ${calcularVolumen(
        altura,
        peso,
        valorGenero
      )} lts de agua por día.`
    );
  } else {
    alert("Gracias por su visita");
  }
};

// LLAMAR FUNCIONES
asignaValores();
verificaGenero(verificador, genero);
calcularVolumen(altura, peso, valorGenero);
resultado();

// FALTA POR HACER
// Agregar interacción con los botones para ir calculando el agua bebida hasta el momento.
