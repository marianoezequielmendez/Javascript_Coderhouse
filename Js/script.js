// VARIABLES
let height = parseFloat(prompt("¿Cuál es su altura?"));
let weight = parseFloat(prompt("¿Cuál es su peso?"));
let gender = prompt(
  "¿Cuál es su género? (H(Hombre), M(Mujer), O(Otro))"
).toUpperCase();
let genderCalculator = 0;
let checker = true;

// FUNCIONES
let calcularVolumen = (height, weight, genderCalculator) => {
  // Calcula el volumen total del agua a tomar, según parámetros.
  return ((height / weight) * genderCalculator).toFixed(2);
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
        "¿Cuál es su género? (H(Hombre), M(Mujer), O(Otro))"
      ).toUpperCase();
    }
  }
  return checker;
};

// RESULTADOS
genderCheck(checker, gender);
let calcular = confirm("¿Desea calcular su volumen?");

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

// FALTA POR HACER
// Agregar interacción con los botones para ir calculando el agua bebida hasta el momento.
