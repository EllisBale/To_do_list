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

// Render Tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked": ""}>
            <span>${task.text}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        // Toggle Completion
        li.querySelector("input").addEventListener("change", () => {
            task.completed = !task.completed;
            saveTasks()
        });

        // Edit task
        li.querySelector(".edit-btn").addEventListener("click", () => {
            const newText = prompt("Edit task:", task.text);
            if (newText) {
                task.text = newText.trim();
                saveTasks();
                renderTasks()
            }
        });


        // Delete task
        li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks = task.filter(deleteTask => deleteTask.id !== task.id);
            saveTasks();
            renderTasks();
        });

        taskList.appendChild(li);

    });
}