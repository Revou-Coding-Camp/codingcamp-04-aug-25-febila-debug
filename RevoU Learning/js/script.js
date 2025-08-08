///array storage
let tasks = [];

function validateForm(){
    const taskInput = document.getElementById("task-input").value.trim();
    const dateInput = document.getElementById("due-date-input").value;

    if (taskInput === "" || dateInput === "") {
        alert("Please fill in all fields.");
    } else {
    //add the task to the tasks array
        addTask(taskInput, dateInput);
    // Clear the input fields after adding the task
        document.getElementById("task-input").value = "";
        document.getElementById("due-date-input").value = "";
    }
}

function addTask(taskInput, dateInput) {
    const newTask = {
        task: taskInput,
        date: dateInput,
    };

    tasks.push(newTask);
    displayTasks(); // Update the displayed task list
    console.log("Task added:", newTask);
}

function displayTasks() {
    const tasksElement = document.getElementById("task-list");
    tasksElement.innerHTML = ""; // Clear the list before displaying tasks

    tasks.forEach((task, index) => {
        tasksElement.innerHTML += `<li>
            <span>${task.task} - (${task.date})</span>
        </li>`;
    });
}

function deleteTask() {
    tasks = [];
    displayTasks(); // Update the displayed task list
    console.log("All tasks deleted.");
}

function filterDate() {
  tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
  displayTasks();
}