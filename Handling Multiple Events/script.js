const colors = [
  "Black",
  "Navy",
  "DarkBlue",
  "MediumBlue",
  "Blue",
  "DarkGreen",
  "Green",
  "Teal",
  "DarkCyan",
  "DeepSkyBlue",
  "DarkTurquoise",
  "MediumSpringGreen",
  "Lime",
  "SpringGreen",
  "Cyan",
  "Aqua",
  "MidnightBlue",
  "DodgerBlue",
  "LightSeaGreen",
  "ForestGreen",
  "SeaGreen",
  "DarkSlateGray",
  "DarkSlateGrey",
  "LimeGreen",
  "MediumSeaGreen",
  "Turquoise",
  "RoyalBlue",
  "SteelBlue",
  "DarkSlateBlue",
  "MediumTurquoise",
  "Indigo",
  "DarkOliveGreen",
  "CadetBlue",
  "CornflowerBlue",
  "MediumAquaMarine",
  "DimGray",
  "DimGrey",
  "SlateBlue",
  "OliveDrab",
  "SlateGray",
  "SlateGrey",
  "LightSlateGray",
  "LightSlateGrey",
  "MediumSlateBlue",
  "LawnGreen",
  "Chartreuse",
  "Aquamarine",
  "Maroon",
  "Purple",
  "Olive",
  "Gray",
  "Grey",
  "SkyBlue",
  "LightSkyBlue",
  "BlueViolet",
  "DarkRed",
  "DarkMagenta",
  "SaddleBrown",
  "DarkSeaGreen",
  "LightGreen",
  "MediumPurple",
  "DarkViolet",
  "PaleGreen",
  "DarkOrchid",
  "YellowGreen",
  "Sienna",
  "Brown",
  "DarkGray",
  "DarkGrey",
  "LightBlue",
  "GreenYellow",
  "PaleTurquoise",
  "LightSteelBlue",
  "PowderBlue",
  "FireBrick",
  "DarkGoldenRod",
  "MediumOrchid",
  "RosyBrown",
  "DarkKhaki",
  "Silver",
  "MediumVioletRed",
  "IndianRed",
  "Peru",
  "Chocolate",
  "Tan",
  "LightGray",
  "LightGrey",
  "Thistle",
];

let parentBox = document.querySelector(".buttons");
let h1 = document.querySelector("h1");

// function handleClick(colorText, e) {
//   if (e.shiftKey === true) {
//     h1.innerText = colorText;
//     h1.style.backgroundColor = colorText;
//   } else {
//     h1.innerText = "Please press shift";
//   }
// }

colors.forEach((color) => {
  let div = document.createElement("div");
  div.classList.add("box");
  div.setAttribute("data-color", color);
  div.style.backgroundColor = color;
  parentBox.append(div);
});

function handleEvent() {
  let color = event.target.dataset.color;
  h1.innerText = color;
  h1.style.backgroundColor = color;
}

parentBox.addEventListener("click", handleEvent);
