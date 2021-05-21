const taskList = document.querySelector("#taskList");
const submitButton = document.getElementById("submit");
function addTask(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task, position) => {
    const htmlElement = document.createElement("div");
    htmlElement.innerHTML = `<div class="task">
            <div class="task__button" 
            onclick="fetch(\`/tasks/${position}\`, 
            { method: 'DELETE'}).then(reloadTasks)"></div>
            <p class="taskLabel">${task.task}</p>
            </div>`;
        taskList.appendChild(htmlElement)
    })
}

let reloadTasks = () => {
    fetch("/tasks")
        .then (r => r.json())
        .then(addTask)
};

document.addEventListener("DOMContentLoaded", reloadTasks )

