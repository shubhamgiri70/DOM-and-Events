let parentBoxOne = document.querySelector(".one");
let boxes = document.querySelectorAll(".box");

boxes.forEach((box, index) => {
  function handleClick() {
    box.innerText = index + 1;

    setTimeout(() => {
      box.innerText = "";
    }, 5000);
  }

  box.addEventListener("click", handleClick);
});

let parentBoxTwo = document.querySelector(".two");
let boxesSecond = document.querySelectorAll(".twobox");

boxesSecond.forEach((box, index) => {
  box.setAttribute("data-num", index + 1);
});

function handleEvent(event) {
  let insideNum = event.target.dataset.num;
  event.target.innerText = insideNum;

  setTimeout(() => {
    event.target.innerText = "";
  }, 5000);
}

parentBoxTwo.addEventListener("click", handleEvent);
