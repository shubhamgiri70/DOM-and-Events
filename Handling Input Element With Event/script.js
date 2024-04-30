let inputText = document.querySelector("#text");
let gender = document.querySelector("#gender");
let terms = document.querySelector("#terms");

let userInfo = {};

function handleKey(event) {
  userInfo.email = event.target.value;
}

function handleChange(event) {
  userInfo.gender = event.target.value;
}

function handleClick(event) {
  userInfo.agreeTerms = event.target.checked;
}

inputText.addEventListener("input", handleKey);
gender.addEventListener("input", handleChange);
terms.addEventListener("input", handleClick);
