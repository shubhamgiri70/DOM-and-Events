let inputBox = document.querySelector(".input-box");
let rootEle = document.querySelector(".root-ele");

let allMovies = [
  {
    movie: "Dune",
    watched: false,
  },
  {
    movie: "inception",
    watched: false,
  },
];

inputBox.addEventListener("keyup", (event) => {
  // adding a movie
  if (event.keyCode === 13) {
    allMovies.push({
      movie: event.target.value,
      watched: false,
    });
    createMovieUi();
  }
});

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUi();
}

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function createMovieUi() {
  rootEle.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let div = document.createElement("div");
    div.classList.add("checkbox-control");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = i;
    input.checked = movie.watched;

    input.addEventListener("change", handleChange);

    let label = document.createElement("label");
    label.classList.add("movie-name");
    label.for = i;
    label.innerText = movie.movie;
    let span = document.createElement("span");
    span.innerText = "❌";
    span.setAttribute("data-id", i);

    span.addEventListener("click", deleteMovie);

    div.append(input, label, span);

    rootEle.append(div);
  });
}

createMovieUi();
