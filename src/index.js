
const form = document.querySelector("#create-task-form")
const textBox = document.querySelector("#new-task-description")
const priority = document.querySelector("#new-task-priority")
const taskList = document.querySelector("#tasks")
const priorities = ["high", "medium", "low"]

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (textBox.value != "") {
    let newTask = document.createElement("li");
    newTask.innerText = textBox.value;
    newTask.className = priority.value;
    taskList.appendChild(newTask);
    sortList();
    textBox.value = "";
  }
})

taskList.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    e.target.remove();
  }
})

function sortList() {
  arr = Array.prototype.slice.call(taskList.children)
  arr.sort((a, b) => {
    return priorities.indexOf(a.className) - priorities.indexOf(b.className)
  })
  taskList.innerHTML = ""
  for (let i = 0; i < arr.length; i++) {
    taskList.appendChild(arr[i]);
  }
}