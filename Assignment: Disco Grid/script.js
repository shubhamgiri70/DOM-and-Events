let parentBox = document.querySelector("section");

for (let i = 0; i < 500; i++) {
  let allBoxes = document.createElement("div");

  parentBox.appendChild(allBoxes);
}
let boxes = document.querySelectorAll("div");
console.log(boxes.length);

function randomColorGenerator() {
  let colorCharacters = [
    "0",
    "1",
    "2",
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
    let randomNum = Math.floor(Math.random() * colorCharacters.length);
    color += colorCharacters[randomNum];
  }
  return color;
}

function randomNumberGenerator() {
  return Math.floor(Math.random() * 500);
}

function handleColor() {
  boxes.forEach((box) => {
    let randomColor = randomColorGenerator();
    box.style.backgroundColor = randomColor;
  });
}

function handleNum() {
  boxes.forEach((box) => {
    let randomNumber = randomNumberGenerator();
    box.innerText = randomNumber;
  });
}

boxes.forEach((box) => {
  box.addEventListener("mousemove", handleColor);
  box.addEventListener("mousemove", handleNum);
});
