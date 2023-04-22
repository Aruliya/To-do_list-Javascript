// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
    event.preventDefault();

    //Creating Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Creating List Item
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    todoList.appendChild(todoDiv);
    todoDiv.appendChild(newTodo);

}