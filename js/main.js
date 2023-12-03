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

const submitButton = document.getElementById("SubmitButton");
if (submitButton) {
  submitButton.addEventListener("click", () => {
 
    alert("Message sent! I will response as soon as posible");
  });
}