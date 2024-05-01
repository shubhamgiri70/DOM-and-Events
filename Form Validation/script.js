let form = document.querySelector("form");

let userNameError = "";
function doesContainNumber(str) {
  return str.split("").some((e) => Number(e));
}

function handleSubmit(event) {
  event.preventDefault();
  let userNameEle = event.target.elements.username;

  if (userNameEle.value === "") {
    userNameError = "can't be empty!";
    userNameEle.classList.add("error");
  } else if (userNameEle.value.length < 5) {
    userNameError = "can't be less then five characters";
    userNameEle.classList.add("error");
  } else if (!doesContainNumber(userNameEle.value)) {
    userNameError = "must contain a number";
    userNameEle.classList.add("error");
  } else {
    userNameError = "";
    userNameEle.classList.add("succes");
    userNameEle.classList.remove("error");
  }

  userNameEle.nextElementSibling.innerText = userNameError;
}

form.addEventListener("submit", handleSubmit);
