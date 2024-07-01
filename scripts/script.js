const editButton = document.querySelector(".content__edit-button");
const popup = document.querySelector(".popup");

//console.log(popup);

function openProfile() {
  popup.classList.add("popup__opened");

  let name = document.querySelector(".content__title").textContent;
  let about = document.querySelector(".content__subtitle").textContent;

  document.getElementById("Nombre").value = name;
  document.getElementById("Acerca").value = about;

  toggleSubmitButton();
}

editButton.addEventListener("click", openProfile);

const closeButton = document.querySelector(".popup__close");

function closeProfile() {
  popup.classList.remove("popup__opened");
}

closeButton.addEventListener("click", closeProfile);

// Busquemos el formulario en el DOM
const formElement = document.querySelector(".popup__edit-profile"); // Utiliza el método querySelector()
function toggleSubmitButton() {
  let nameInput = document.getElementById("Nombre").value;
  let jobInput = document.getElementById("Acerca").value;
  let submitButton = document.querySelector(".popup__submit"); // La línea 22

  if (nameInput.trim() !== "" && jobInput.trim() !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Añadir event listeners a los campos de entrada para verificar el contenido
document.getElementById("Nombre").addEventListener("input", toggleSubmitButton);
document.getElementById("Acerca").addEventListener("input", toggleSubmitButton);

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
  const nameInput = document.getElementById("Nombre").value; // Utiliza el método querySelector()
  const jobInput = document.getElementById("Acerca").value; // Utiliza el método querySelector()

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente

  // Selecciona los elementos donde se introducirán los valores de los campos

  const name = document.querySelector(".content__title");
  const about = document.querySelector(".content__subtitle");

  // Inserta nuevos valores utilizando el textContent (solo se hace a etiquetas)

  name.textContent = nameInput;
  about.textContent = jobInput;

  closeProfile();

  // propiedad del método querySelector()
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener("submit", handleProfileFormSubmit);

formElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleProfileFormSubmit(event);
  }
});
