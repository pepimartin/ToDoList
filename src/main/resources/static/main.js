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
            <p class="task__label">${task.description}</p>
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

const toDoInput = document.getElementById("description");

const validateTask = (event) => {
    const description = event.target.value;
    if (description.length < 3) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}
toDoInput.addEventListener("input" , validateTask);
