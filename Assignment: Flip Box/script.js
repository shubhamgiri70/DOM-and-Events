// Without Event Deligation

let parentOne = document.querySelector(".one");

for (let i = 0; i < 12; i++) {
  let box = document.createElement("div");
  box.classList.add("box");

  box.addEventListener("click", function () {
    box.innerText = i + 1;

    setTimeout(() => {
      box.innerText = "";
    }, 5000);
  });

  parentOne.appendChild(box);
}

// With Event Deligation

let parentTwo = document.querySelector(".two");

for (let i = 0; i < 12; i++) {
  let box = document.createElement("div");
  box.classList.add("box");

  box.setAttribute("data-num", i + 1);
  parentTwo.appendChild(box);
}

function handleEvent(event) {
  if (event.target.classList.contains("box")) {
    event.target.innerText = event.target.dataset.num;
    setTimeout(() => {
      event.target.innerText = "";
    }, 5000);
  }
}

parentTwo.addEventListener("click", handleEvent);
