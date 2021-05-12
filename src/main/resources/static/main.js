nos podemos hacer
const tasksList= document.querySelector("#tasksList);

// 3)
function showTasks(tasks) {
    tasks.forEach(task => {
        const element = `<div class="todo">
            <p class="list">(${task.todo})</p>
        </div>`;
        tasksList.insertAdjacentHTML("beforeend", element)
    })
}
// 2)
let loadTasks = () => {
    fetch("/tasks")
        .then(r => r.json())
        .then(showTasks)
};

// 1)
document.addEventListener("DOMContentLoaded", loadTasks)
