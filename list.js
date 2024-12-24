function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");

    const taskText = taskInput.value.trim();

    const listItem = document.createElement("li");

    const taskSpan = document.createElement("Span");
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "20px";

    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
}    