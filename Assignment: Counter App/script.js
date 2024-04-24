function main() {
  let increment = document.querySelector(".inc");
  let counter = document.querySelector("h1");
  let decrement = document.querySelector(".dec");
  let reset = document.querySelector(".reset");

  let count = 0;

  function oneIncrement() {
    count = count + 1;
    counter.innerText = count;
  }

  function oneDecrement() {
    count = count - 1;
    counter.innerText = count;
  }

  function resetAll() {
    count = 0;
    counter.innerText = count;
  }

  increment.addEventListener("click", oneIncrement);
  decrement.addEventListener("click", oneDecrement);
  reset.addEventListener("click", resetAll);

  counter.innerText = count;
}
