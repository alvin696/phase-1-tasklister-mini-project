document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('form');
  const taskInput = document.querySelector('#task');
  const taskList = document.querySelector('#task-list');

  function addTask(event) {
    // prevent default form submission
    event.preventDefault();

    // get the task from the input field
    const taskText = taskInput.value;

    // create a new list item with the task text
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;

    // add the new list item to the task list
    taskList.appendChild(taskItem);

    // clear the input field
    taskInput.value = '';
  }

  // listen for form submission
  taskForm.addEventListener('submit', addTask);
});
