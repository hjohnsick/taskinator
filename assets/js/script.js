var buttonEl = document.querySelector("#save-task");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoE1.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);
  
