import Task from './task.js';

class displayTask {
  static displayTasks() {
    const tasks = Store.getTasks();
    tasks.forEach((task) => displayTask.addTaskToList(task));
  }

  static addTaskToList(task) {
    const elementList = document.querySelector('.list');
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'item');

    listItem.innerHTML = `<input type="checkbox" id='${task.id}' name="taskStatus" class = 'taskStatus'>
                    <p class='description edit' contenteditable='true' id='${task.id}'>${task.description}</p>
                    <i class="fas fa-trash-alt remove-btn" id='${task.id}'></i>`;

    elementList.appendChild(listItem);
  }

  static deleteTask(el) {
    if (el.classList.contains('remove-btn')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#inputTask').value = '';
  }
}

class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static addTask(task) {
    const tasks = Store.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTask(elem) {
    if (elem.classList.contains('remove-btn')) {
      const tasks = Store.getTasks();
      if (tasks.length === 1) {
        tasks.pop();
      } else {
        tasks.splice(parseInt(elem.id), 1);

        tasks.forEach((element, index) => {
          element.id = index + 1;
        });
      }
      index = tasks.length;

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  static modifyTask(elem) {
    const tasks = Store.getTasks();
    console.log(elem.id);
    tasks[elem.id].description = elem.innerHTML;

    tasks.forEach((element, index) => {
      element.id = index + 1;
    });
    index = tasks.length;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static CompletedTask(elem) {
    const tasks = Store.getTasks();
    tasks[elem.id].completed = true;
    tasks.forEach((element, index) => {
      element.id = index + 1;
    });
    index = tasks.length;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

document.addEventListener('DOMContentLoaded', displayTask.displayTasks);
let index = 1;

// Event: Add a Task

document.querySelector('#inputTask').addEventListener('keyup', (event) => {
  // Prevent actual submit
  event.preventDefault();
  if (event.keyCode === 13) {
    // Get form values
    const completed = false;
    const description = document.querySelector('#inputTask').value;
    const tasks = Store.getTasks();
    index = tasks.length + 1;

    const id = index;

    index++;

    // Validate
    if (description === '') {
      alert('Please fill in the field');
    } else {
    // Instantiate task
      const task = new Task(description, id, completed);

      // Add Task to displayTask
      displayTask.addTaskToList(task);

      // Add task to store
      Store.addTask(task);

      // Clear fields
      displayTask.clearFields();
    }
  }
});

// Event: Remove a Task
document.querySelector('.list').addEventListener('click', (e) => {
  // Remove task from displayTask
  displayTask.deleteTask(e.target);

  // Remove task from store
  Store.removeTask(e.target);
});

document.querySelector('.list').addEventListener('input', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('edit')) {
    Store.modifyTask(e.target);
  }
});

document.querySelector('.list').addEventListener('change', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('taskStatus')) {
    console.log(e.target.nextElementSibling);
    if (e.target.checked) {
      // do something
      e.target.nextElementSibling.classList.add('line');
      Store.CompletedTask(e.target);
    }
  }
});

document.querySelector('.clrCompleted').addEventListener('click', (e) => {
  e.preventDefault();
  let tasks = Store.getTasks();
  const arr1 = tasks.filter((el) => el.completed === false);
  console.log(arr1);
  tasks = arr1;
  localStorage.setItem('tasks', JSON.stringify(tasks));

  const parent = document.querySelector('.list');
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
  displayTask.displayTasks();
});

export default addRemove;
