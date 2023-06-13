// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
document.addEventListener("DOMContentLoaded", retrieveTasksFromStorage); // Added event listener to retrieve tasks on page load

// Functions
function addTodo(event) {
    event.preventDefault();

    // Creating Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Creating List Item
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    todoList.appendChild(todoDiv);
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-2x fa-check"></i>'
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-2x fa-trash"></i>'
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    // Store the new task in local storage
    storeTaskInStorage(todoInput.value);

    // Clear Todo Input
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    
    // Delete Todo
    if (item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        todo.remove();

        // Remove the task from local storage
        removeTaskFromStorage(todo);
    }

    // Check Mark
    if(item.classList[0] === "complete-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function storeTaskInStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks")) {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    } else {
        tasks = [];
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function retrieveTasksFromStorage() {
    if (localStorage.getItem("tasks")) {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.forEach(function(task) {
            // Creating Todo Div
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");

            // Creating List Item
            const newTodo = document.createElement("li");
            newTodo.innerText = task;
            newTodo.classList.add("todo-item");

            todoList.appendChild(todoDiv);
            todoDiv.appendChild(newTodo);

            const completedButton = document.createElement("button");
            completedButton.innerHTML = '<i class="fa fa-2x fa-check"></i>'
            completedButton.classList.add("complete-button");
            todoDiv.appendChild(completedButton);

            const trashButton = document.createElement('button');
            trashButton.innerHTML = '<i class="fa fa-2x fa-trash"></i>'
            trashButton.classList.add("trash-button");
            todoDiv.appendChild(trashButton);
        });
    }
}

function removeTaskFromStorage(task) {
    if (localStorage.getItem("tasks")) {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const taskIndex = tasks.indexOf(task.innerText);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
}