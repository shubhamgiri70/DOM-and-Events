function main() {
  let increment = document.querySelector(".inc");
  let counter = document.querySelector("h1");
  let decrement = document.querySelector(".dec");
  let reset = document.querySelector(".reset");

  let count = Number(localStorage.getItem("count")) || 0;

  function oneIncrement() {
    count = count + 1;
    counter.innerText = count;
    localStorage.setItem("count", count);
  }

  function oneDecrement() {
    count = count - 1;
    counter.innerText = count;
    localStorage.setItem("count", count);
  }

  function resetAll() {
    count = 0;
    counter.innerText = count;
    localStorage.setItem("count", count);
  }

  increment.addEventListener("click", oneIncrement);
  decrement.addEventListener("click", oneDecrement);
  reset.addEventListener("click", resetAll);

  counter.innerText = count;
}

main();
