let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

function randomColorGenerator() {
  let colorCharactor = [
    "0",
    "1",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * colorCharactor.length);
    color = color + colorCharactor[randomNum];
  }
  return color;
}

function changeOnClick() {
  let randomColor = randomColorGenerator();
  box1.style.backgroundColor = randomColor;
}

function changeOnMouseMove() {
  let randomColor = randomColorGenerator();
  box2.style.backgroundColor = randomColor;
}

box1.addEventListener("click", changeOnClick);
box2.addEventListener("mousemove", changeOnMouseMove);
