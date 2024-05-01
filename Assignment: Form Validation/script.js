let form = document.querySelector("form");

let errorMessage = {};

function displayError(name, message) {
  let ele = form.elements[name];
  ele.nextElementSibling.innerText = message;
  errorMessage[name] = message;
  ele.classList.add("error");
  ele.classList.remove("success");
}

function displaySuccess(name) {
  let ele = form.elements[name];
  ele.nextElementSibling.innerText = "";
  errorMessage[name] = "";
  ele.classList.remove("error");
  ele.classList.add("success");
}

function handleSubmit(event) {
  event.preventDefault();
  let elements = event.target.elements;
  const usernameEle = elements.username.value;
  const nameEle = elements.name.value;
  const emailEle = elements.email.value;
  const phoneEle = elements.phone.value;
  const passwordEle = elements.password.value;
  const confirmPasswordEle = elements["confirm-password"].value;

  if (usernameEle.length < 4) {
    displayError("username", "Username can't be less than 4 characters");
  } else {
    displaySuccess("username");
  }

  if (!isNaN(nameEle)) {
    displayError("name", "Name can't be a number");
  } else {
    displaySuccess("name");
  }

  if (!emailEle.includes("@") || emailEle.length < 6) {
    displayError("email", "Invalid email format");
  } else {
    displaySuccess("email");
  }

  if (isNaN(phoneEle) || phoneEle.length < 7) {
    displayError("phone", "Invalid phone number");
  } else {
    displaySuccess("phone");
  }

  if (passwordEle !== confirmPasswordEle) {
    displayError("password", "Passwords do not match");
    displayError("confirm-password", "Passwords do not match");
  } else {
    displaySuccess("password");
    displaySuccess("confirm-password");
  }
}

form.addEventListener("submit", handleSubmit);
