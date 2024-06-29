let editButton = document.querySelector(".content__edit-button");
let popup = document.querySelector(".popup");

//console.log(popup);

function openProfile() {
  popup.classList.add("popup__opened");
}

editButton.addEventListener("click", openProfile);

let closeButton = document.querySelector(".popup__close");

function closeProfile() {
  popup.classList.remove("popup__opened");
}

closeButton.addEventListener("click", closeProfile);

// Busquemos el formulario en el DOM
let formElement = document.querySelector(".popup__edit-profile"); // Utiliza el método querySelector()
let submitButton = document.querySelector(".popup__submit");
// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
  // Esta línea impide que el navegador
  // entregue el formulario en su forma predeterminada.
  evt.preventDefault();
  // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
  // Lo explicaremos todo con más detalle después.

  // Busquemos los campos del formulario en el DOM
  let nameInput = document.getElementById("Nombre").value; // Utiliza el método querySelector()
  let jobInput = document.getElementById("Acerca").value; // Utiliza el método querySelector()

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente

  // Selecciona los elementos donde se introducirán los valores de los campos

  let name = document.querySelector(".content__title");
  let about = document.querySelector(".content__subtitle");

  // Inserta nuevos valores utilizando el textContent (solo se hace a etiquetas)

  name.textContent = nameInput;
  about.textContent = jobInput;

  // propiedad del método querySelector()
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener("submit", handleProfileFormSubmit);
