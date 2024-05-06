// target input elemenmt
// target root elemet
// take a variable with the value of array
// add event listner to the input element
// write a function with handleinput name
// inside the function write an if condition for keyCode and another condition for empty string inside it create a variable todo with the value if an object, inside that object put key of Name and isDone with the value of inputBox and false in it and push it inside the todoarray
// write a function to createui
// call the create ui function into handle input function
// inside the createui function put foreatch on todoarray, to create ui for each input
// change the insidetext of p with each todo.name similarly put inputcheckbox.checked is equals to todo.isDone
// inside createui function put root.innerhtml ia equals to empty string, so that it does'nt repeat
// add event listner to span(delete)
// create a function handleDelete, with evnet parameter
// set attribute to the span button with name of data-id and value of index (get index from todo of foreach)
// inside handledelte function access id in a variable
// to delete the element put splice method on the todoArray and call the createui function
// add event listner to inputCheckbox
// write a function name handlecheckbox
// set attribute to the inputcheckbox button with name of data-id and value of index (get index from todo of foreach)
// inside handlcheckbox function access id in a variable
// todoArray[id].isDone = !todoArray[id].isDone ifter that call the createui function
// wrap the whole code into a main function, and call the function so that no one can access the varaable or manupulate it 

function main() {
  let inputBox = document.getElementById("text");
  let root = document.querySelector(".parent-div");

  let todoArray = [];

  function handleInput(event) {
    let inputValue = event.target.value;
    if (event.keyCode === 13 && inputValue !== "") {
      let todo = {
        Name: inputValue,
        isDone: false,
      };

      todoArray.push(todo);
      event.target.value = "";

      createUi();
    }
  }

  function handleClick(event) {
    let id = event.target.dataset.id;
    todoArray.splice(id, 1);
    createUi();
  }

  function handleCheckbox(event) {
    let id = event.target.dataset.id;
    todoArray[id].isDone = !todoArray[id].isDone;

    createUi();
  }

  function createUi() {
    root.innerHTML = "";
    todoArray.forEach((todo, index) => {
      let div = document.createElement("div");
      div.classList.add("flex");
      div.classList.add("item-center");
      div.classList.add("justify-between");
      let inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
      inputCheckbox.checked = todo.isDone;
      inputCheckbox.classList.add("checkbox");
      inputCheckbox.setAttribute("data-id", index);
      inputCheckbox.addEventListener("input", handleCheckbox);

      let p = document.createElement("p");
      p.innerText = todo.Name;
      let span = document.createElement("span");
      span.innerText = "❌";
      span.setAttribute("data-id", index);
      span.addEventListener("click", handleClick);

      div.append(inputCheckbox, p, span);
      root.append(div);
    });
  }

  inputBox.addEventListener("keyup", handleInput);
}



main();
