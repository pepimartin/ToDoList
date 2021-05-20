const taskList = document.querySelector("#taskList");

function addTask(tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task, position) => {
    const htmlElement = document.createElement("div");
    htmlElement.innerHTML = `<div class="task">
            <div class="task__button" 
            onclick="fetch(\`/tasks/${position}\`, 
            { method: 'DELETE'}).then(reloadTasks)"></div>
            <p class="task__label"></p>
            </div>`;
        taskList.appendChild(htmlElement)
    })
}
const submitButton = document.getElementById("submit");
const validateHomework = (event) => {
    const homework = event.target.value;
    if (homework.length < 3) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}
submitButton.addEventListener("click" , validateHomework);

let reloadTasks = () => {
    fetch("/")
        .then (r => r.json())
        .then(addTask)
};

document.addEventListener("DOMContentLoaded", reloadTasks )
