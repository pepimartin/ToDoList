const taskList = document.querySelector("#taskList");

function addTask(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task, position) => {
    const htmlElement = document.createElement("div");
    htmlElement.innerHTML = `<div class="task">
            <div class="task__button" 
            onclick="fetch(\`/tasks/${position}\`, 
            { method: 'DELETE'}).then(reloadTasks)"></div>
            <p class="taskLabel">${task.taskLabel}</p>
            </div>`;
        taskList.appendChild(htmlElement)
    })
}
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",addTask);


let reloadTasks = () => {
    fetch("/tasks")
        .then (r => r.json())
        .then(addTask)
};

document.addEventListener("DOMContentLoaded", reloadTasks )

