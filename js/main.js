const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));


/* Animaciones */


/*<---Formulario----->*/

const clearButton = document.getElementById("ClearButton");
if (clearButton) {
  clearButton.addEventListener("click", () => {
    const fullNameInput = document.getElementById("FullName");
    const emailInput = document.getElementById("Email");
    const messageInput = document.getElementById("Message");

    fullNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });
}

/*<---Expresiones----->*/

const regexName = /^[a-zA-Z ]{3,30}$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const regexMessage = /.+/; // Simple check for non-empty

const submitButton = document.getElementById("SubmitButton");
if (submitButton) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Previene la acción por defecto del formulario

    const fullNameInput = document.getElementById("FullName");
    const emailInput = document.getElementById("Email");
    const messageInput = document.getElementById("Message");

    // Validación de campos

    if(fullNameInput.value === "") {
      alert("Please enter your full name.");
      fullNameInput.value = "";
      return;
  } else if (!regexName.test(fullNameInput.value)) {
      alert("The entered name is not valid.");
      fullNameInput.value = ""; 
      return;
  }

  if(emailInput.value === "") {
      alert("Please enter your email address.");
      emailInput.value = "";
      return;
  } else if (!regexEmail.test(emailInput.value)) {
      alert("The entered email address is not valid.");
      emailInput.value = "";

      return;
  }

  if(messageInput.value === "") {
      alert("Please enter your message.");
      messageInput.value = "";
      return;
  } else if (!regexMessage.test(messageInput.value)) {
      alert("The entered message is not valid.");
      messageInput.value = "";
      return;
  }

  fullNameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

    // Si todo está bien.. 
    alert("Hello, your message is sent! I will respond as soon as possible <3");


  });
}
