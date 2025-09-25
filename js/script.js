const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList")


let tasks = [];

// Add Task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === ""){
        alert("Please enter a task!")
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    renderTasks();
    saveTasks();
    
    taskInput.value = "";
});