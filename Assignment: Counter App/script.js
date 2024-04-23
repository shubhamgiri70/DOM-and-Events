let increment = document.querySelector(".inc");
let counter = document.querySelector("h1");
let decrement = document.querySelector(".dec");
let reset = document.querySelector(".reset");

function oneIncrement() {
  counter.innerText = Number(counter.innerText) + 1;
}

function oneDecrement() {
  counter.innerText = Number(counter.innerText) - 1;
}

function resetAll() {
  counter.innerText = 0;
}

increment.addEventListener("click", oneIncrement);
decrement.addEventListener("click", oneDecrement);
reset.addEventListener("click", resetAll);
