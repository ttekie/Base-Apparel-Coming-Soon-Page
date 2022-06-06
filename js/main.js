"use strict";
let input = document.querySelector(".apparel__input");
let form = document.querySelector(".apparel__form");
function emailValidity(email) {
   let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   return regex.test(email);
}

function formStyle(event) {
   // prevent the form from submitting
   event.preventDefault();
   
   const IS_VALID = emailValidity(input.value);

   input.value = `${IS_VALID ? "" : input.value}`;
   input.style.border = `2px solid ${IS_VALID ? "hsl(145, 41%, 51%)" : "hsl(0, 93%, 68%)"}`;
   form.classList.add(`${IS_VALID ? "apparel__email__success" : "apparel__email__error"}`);   
 
   setTimeout(() => {
      input.style.border = "";
      form.classList.remove(`${IS_VALID ? "apparel__email__success" : "apparel__email__error"}`);
   },1500);
}
form.addEventListener("submit", formStyle);