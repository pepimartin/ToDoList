const taskField = document.getElementById("todo");
const list = document.getElementById("taskList");
const submitBtn = document.getElementById("submit");

const addTask = (event) => {
    const task = event.target.value;

}
taskField.addEventListener('input', addTask);

const submitTask = (event) => {
    const submit = event.target.value;
    submit.innerHtml="+";
}
submitBtn.addEventListener('click', submitTask);

