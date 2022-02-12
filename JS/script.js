const tarjeta = document.getElementById("tarjeta");
const btnAbrirFormulario = document.getElementById("btn-abrir-formulario");
const formulario = document.getElementById("formulario-tarjeta");
const numeroTarjeta = document.getElementById("numeroTarjeta");
const nombreTarjeta = document.getElementById("nombreTarjeta");
const logoMarca = document.getElementById("logo-marca");
const firma = document.querySelector("#tarjeta .firma p");
const mesExpiracion = document.getElementById("mesExpiracion");
const yearExpiracion = document.getElementById("yearExpiracion");
const ccv = document.querySelector("#tarjeta .ccv");

// Volteamos la tarjeta para mostrar el frente
const mostrarFrente = () => {
  if (tarjeta.classList.contains("active")) {
    tarjeta.classList.remove("active");
  }
};

// Rotacion de la tarjeta
tarjeta.addEventListener("click", () => {
  tarjeta.classList.toggle("active");
});

// Boton de abrir formulario
btnAbrirFormulario.addEventListener("click", () => {
  btnAbrirFormulario.classList.toggle("active");
  formulario.classList.toggle("active");
});

// Select del mes generado dinamicamente
for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  formulario.selectMes.appendChild(option);
}

// Select del year generado dinamicamente
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  formulario.selectYear.appendChild(option);
}

// Input numero de tarjeta
formulario.inputNumero.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  formulario.inputNumero.value = valorInput
    // Eliminamos espacios en blanco
    .replace(/\s/g, "")
    // Eliminar las letras
    .replace(/\D/g, "")
    // Ponemos espacio cada 4 numeros
    .replace(/([0-9]{4})/g, "$1 ")
    // Elimina el ultimo espaciado
    .trim();

  numeroTarjeta.textContent = valorInput;

  if (valorInput == "") {
    numeroTarjeta.textContent = "#### #### #### ####";

    logoMarca.innerHTML = "";
  }

  if (valorInput[0] == 4) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "assets/images/logos/visa.png";
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] == 5) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "assets/images/logos/mastercard.png";
    logoMarca.appendChild(imagen);
  }

  // Voltemos la tarjeta para que el usuario vea el frente
  mostrarFrente();
});

// Input Nombre de tarjeta
formulario.inputNombre.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, "");
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;

  if (valorInput == "") {
    nombreTarjeta.textContent = "Jhon Doe";
  }

  mostrarFrente();
});

// Select mes
formulario.selectMes.addEventListener("change", (e) => {
  const mesElegido = e.target.value;
  console.log(mesElegido);

  mesExpiracion.textContent = mesElegido;

  mostrarFrente();
});

// Select year
formulario.selectYear.addEventListener("change", (e) => {
  const yearElegido = e.target.value.slice(2);
  yearExpiracion.textContent = yearElegido;

  mostrarFrente();
});


// CCV
formulario.inputCCV.addEventListener("keyup", (e) => {
  if(!tarjeta.classList.contains("active")){
    tarjeta.classList.toggle("active")
  }

  let valorInput = e.target.value;

  formulario.inputCCV.value = formulario.inputCCV.value
  // Elimina espacios en blanco
  .replace(/\s/g, '')
  // Elimina las letras
  .replace(/\D/g, '')

  ccv.textContent = valorInput
})