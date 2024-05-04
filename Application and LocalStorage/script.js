var input = document.querySelector(".inputBox");
var form = document.querySelector(".formBox");
var todos = document.querySelector(".todos");

var todoArr = [
  { todo: "todo1", isDone: false },
  { todo: "todo2", isDone: false },
];

// Read
function displayTodo(arr = todoArr) {
  todos.innerHTML = arr.map(
    (item, index) =>
      `<div class="todoListItem" >
        <div class="flex">
            <input type="checkbox" id="todo-${index}" class="todo-checkbox" />
            <label for="todo-${index}" class="strikethrough">${item.todo}</label>
        </div>
        <button class="delete-btn" id=${index}>Delete</button>
    </div>
    `
  );
}

displayTodo();

// Update
function updateTodo(event) {
  if (event.target.className !== "todo-checkbox") return;
  var index = event.target.id.slice(5);
  todoArr[index].isDone = event.target.checked;
}

// Delete
function deleteTodo(event) {
  if (event.target.className !== "delete-btn") return;
  var index = event.target.id;
  todoArr.splice(index, 1);
  displayTodo(todoArr);
}

// Create
function createTodo(e) {
  e.preventDefault();
  todoArr.push({ todo: input.value, isDone: false });
  displayTodo(todoArr);
  input.value = "";
}

form.addEventListener("submit", createTodo);
todos.addEventListener("click", deleteTodo);
todos.addEventListener("click", updateTodo);
