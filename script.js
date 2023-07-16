
// Get form element
const taskForm = document.getElementById("task-form");

// Get task list element
const taskList = document.getElementById("tasks");

// Add task event listener
taskForm.addEventListener("submit", addTask);

// Function to add a task
function addTask(e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  // Create task item
  const taskItem = document.createElement("li");
  taskItem.classList.add("list-group-item");
  taskItem.innerHTML = `
  <div class="p-3 text-warning-emphasis bg-warning-rgb border border-warning-rgb rounded-3">
    <h3>${title}</h3>
    <p>${description}</p>
    <p><strong>Due Date:</strong> ${dueDate}</p>
    <p><strong>Priority:</strong> ${priority}</p>
    </div>
  `;

  // Add task item to the task list
  taskList.appendChild(taskItem);

  // Clear form inputs
  taskForm.reset();
}
