function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");

  completeBtn.onclick = function () {
    span.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.onclick = function () {
    li.remove();
  };

  const btnContainer = document.createElement("div");
  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
