// target input box
// target form box
// create a variable with the value of an arry
// add event listner to the form box
// pass createtodo function inside the event listner
// write a function createTodo with parameter of event in it
// remove default nature of the form element
// Use value property to get input value
// push the input value inside the todo array in object form
// to display the input value into todo app create a function name displaytodo which will teke parameter of an array
// target parent element for the ui
// inside that function, create ui using map method on the parent element
// after that call the displaytodo function into the createtodo function with the parameter of todoarray in it
// Clear input field after adding todo
// Clear previous todos into displaytodo function
// UPDATE
// add event listener to the todos variable
// create a function updatetodo, which accepts event as a parameter
// in update function write a if condition that if inputcheckbox's classname is not equal to todo-checkbox, then return it
// DELETE
// add event listener to the todos variable
// create a function deletetodo, which accepts event as a parameter
// in the function write a if condition that if button's classname is not equal to delete-btn, then return it

let input = document.querySelector(".inputBox");
let form = document.querySelector(".formBox");
let todos = document.querySelector(".todos");

let todoArray = [
  { todo: "todo1", isDone: false },
  { todo: "todo2", isDone: false },
];

// read
function displayTodo(arr = todoArray) {
  todos.innerHTML = "";
  arr.forEach((item, index) => {
    let li = document.createElement("li");
    li.classList.add("todoListItem");
    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.classList.add("todo-checkbox");
    inputCheckbox.id = `todo-${index}`;
    let p = document.createElement("p");
    p.innerText = item.todo;
    let button = document.createElement("button");
    button.classList.add("delete-btn");
    button.id = index;
    button.innerText = "delete";

    li.append(inputCheckbox, p, button);
    todos.appendChild(li);
  });
}

displayTodo();

// update
function updateTodo(event) {
  if (event.target.className !== "todo-checkbox") return;
  var index = event.target.id.slice(5);
  todoArray[index].isDone = event.target.checked;
}

// delete
// delete
function deleteTodo(event) {
  if (!event.target.classList.contains("delete-btn")) return;
  var index = event.target.id;
  todoArray.splice(index, 1);
  displayTodo(todoArray);
}

// create
function createTodo(event) {
  event.preventDefault();
  let newTodo = input.value;
  todoArray.push({ todo: newTodo, isDone: false });
  displayTodo(todoArray);
  input.value = "";
}

form.addEventListener("submit", createTodo);
todos.addEventListener("click", updateTodo);
todos.addEventListener("click", deleteTodo);
