// VARIABLES
let height;
let weight;
let gender;
let genderCalculator = 0;
let checker = true;
let calcular;

// FUNCIONES
let asignaValores = () => {
  // Asigna valores iniciales
  height = parseFloat(prompt("¿Cuál es su altura?"));
  weight = parseFloat(prompt("¿Cuál es su peso?"));
  gender = prompt(
    "¿Cuál es su género? (H(Hombre), M(Mujer), O(Otro))"
  ).toUpperCase();
};

let genderCheck = (checker, gender) => {
  // Verifica si el género es correcto y asigna un puntaje.
  while (checker) {
    if (gender == "H") {
      genderCalculator = 1.5;
      checker = false;
    } else if (gender == "M") {
      genderCalculator = 1.2;
      checker = false;
    } else if (gender == "O") {
      genderCalculator = 1.5;
      checker = false;
    } else {
      gender = prompt(
        "Debé seleccionar uno de los siguientes géneros: H(Hombre), M(Mujer), O(Otro)"
      ).toUpperCase();
    }
  }
  return checker;
};

let calcularVolumen = (height, weight, genderCalculator) => {
  // Calcula el volumen total del agua a tomar, según parámetros.
  return ((height / weight) * genderCalculator).toFixed(2);
};

let resultado = () => {
  calcular = confirm("¿Desea calcular su volumen?");

  if (calcular) {
    alert(
      `Ustede debe beber ${calcularVolumen(
        height,
        weight,
        genderCalculator
      )} lts de agua por día.`
    );
  } else {
    alert("Gracias por su visita");
  }
};

// LLAMAR FUNCIONES
asignaValores();
genderCheck(checker, gender);
calcularVolumen(height, weight, genderCalculator);
resultado();

// FALTA POR HACER
// Agregar interacción con los botones para ir calculando el agua bebida hasta el momento.
