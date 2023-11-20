const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteIcon = document.createElement("i");

  span.innerText = taskText;
  deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");

  li.appendChild(span);
  li.appendChild(deleteIcon);

  deleteIcon.addEventListener("click", function () {
    li.remove();
  });

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
