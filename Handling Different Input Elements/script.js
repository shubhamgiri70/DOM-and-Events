let form = document.querySelector("form");
let model = document.querySelector(".model_overlay");
let modelInfo = document.querySelector(".model_info");

let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  userInfo.name = event.target.elements.name.value;
  userInfo.email = event.target.elements.email.value;
  userInfo.choice = event.target.elements.choice.value;
  userInfo.color = event.target.elements.color.value;
  userInfo.movie = event.target.elements.movie.value;
  userInfo.book = event.target.elements.book.value;
  userInfo.terms = event.target.elements.terms.checked;

  model.classList.add("open");

  let close = document.querySelector(".model_close");
  close.classList.add("show"); // Show the close button

  close.addEventListener("click", () => {
    model.classList.remove("open");
    close.classList.remove("show");
  });

  displayInfo(userInfo);
}

function displayInfo(data = {}) {
  modelInfo.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.innerText = `Hello ${data.name}`;
  let email = document.createElement("p");
  email.innerText = `Email: ${data.email}`;
  let choice = document.createElement("p");
  choice.innerText = `Watching choice: ${data.choice}`;
  let color = document.createElement("p");
  color.innerText = `Color: ${data.color}`;
  let movie = document.createElement("p");
  movie.innerText = `Rating for movie: ${data.movie}`;
  let book = document.createElement("p");
  book.innerText = `book: ${data.book}`;
  let terms = document.createElement("p");
  terms.classList.add("tc");
  terms.innerText = `👉: ${
    data.terms
      ? "You have accepted the terms"
      : "You have not accepted the terms"
  }`;

  modelInfo.append(h1, email, choice, color, movie, book, terms);
}

form.addEventListener("submit", handleSubmit);
