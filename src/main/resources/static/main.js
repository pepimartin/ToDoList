const listToDo = document.getElementById("taskList");

function addTasks() {
    fetch("/tasks").then(res => res.json()).then(function (tasks) {
        tasks.forEach((task, i) => {
            const element = `<div class="task" id="task-${i}">${task.description}</div>`;
            listToDo.insertAdjacentHTML("beforeend", element);
            document.getElementById("task-${i}").addEventListener("click", deleteToDo())
        })
    })
}

document.addEventListener("DOMContentLoaded", addTasks);




/*/const taskField = document.getElementById("todo");
const list = document.getElementById("taskList");
const submitBtn = document.getElementById("submit");

const addTask = (event) => {
    const task = event.target.value;
}
taskField.addEventListener('input', addTask);

const submitTask = (event) => {
    const submit = event.target.value;
    submit.innerHtml=``;
}
submitBtn.addEventListener('click', submitTask);/*/

