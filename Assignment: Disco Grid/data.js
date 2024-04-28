let section = document.querySelector("section");

for (i = 0; i < 500; i++) {
  let boxes = document.createElement("div");

  section.appendChild(boxes);
}

let allBoxes = document.querySelectorAll("div");

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
    let randomColorNum = Math.floor(Math.random() * colorCharacters.length);
    color = color + colorCharacters[randomColorNum];
  }
  return color;
}

function randomNumberGenerator() {
  return Math.floor(Math.random() * 500);
}

function handleColor() {
  allBoxes.forEach((box) => {
    let randomColor = randomColorGenerator();
    box.style.backgroundColor = randomColor;
  });
}

function handleNumber() {
  allBoxes.forEach((box) => {
    box.innerText = randomNumberGenerator();
  });
}

allBoxes.forEach((box) => {
  box.addEventListener("mousemove", handleColor);
  box.addEventListener("mousemove", handleNumber);
});
