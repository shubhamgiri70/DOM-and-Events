let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector(".computer-icons");
let result = document.querySelector(".result");
let reset = document.querySelector("button");

let dataset = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "paper",
    beats: "rock",
  },
];

let userSelected = {},
  computerSelected = {};

function getWinner(user, computer) {
  if (user.name === computer.name) {
    result.innerText = "it's tie!";
  } else if (user.beats === computer.name) {
    result.innerText = "🎉 You won! 🎉";
  } else {
    result.innerText = "Computer wins ❌";
  }
}

function getRandomNumber(max = 3) {
  return Math.floor(Math.random() * max);
}

function createUserLayout() {
  userRoot.innerHTML = "";
  dataset.forEach((icon) => {
    let span = document.createElement("span");
    let i = document.createElement("i");
    i.className = `fa fa-hand-${icon.name}-o`;

    if (userSelected.name === icon.name) {
      span.classList.add("selected");
    }

    span.addEventListener("click", () => {
      userSelected = icon;
      computerSelected = dataset[getRandomNumber()];

      getWinner(userSelected, computerSelected);

      rerender();
    });

    span.append(i);
    userRoot.append(span);
  });
}

createUserLayout();

function createComputerLayout() {
  computerRoot.innerHTML = "";
  dataset.forEach((icon) => {
    let span = document.createElement("span");
    let i = document.createElement("i");
    if (computerSelected.name === icon.name) {
      span.classList.add("selected");
    }
    i.className = `fa fa-hand-${icon.name}-o`;
    span.append(i);

    computerRoot.append(span);
  });
}

createComputerLayout();

reset.addEventListener("click", () => {
  userSelected = {};
  computerSelected = {};
  rerender();
});

function rerender() {
  createUserLayout();
  createComputerLayout();
}
