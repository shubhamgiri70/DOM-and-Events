let form = document.querySelector("form");

let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  userInfo.email = form.elements.email.value;
  userInfo.gender = form.elements.gender.value;
  userInfo.agreeTerms = form.elements.terms.checked;

  console.log(userInfo);
}

form.addEventListener("submit", handleSubmit);
