import { globaldocument } from '../../dynamic.js';
import Task from '../script/task.js'


// debug;



function addItem1(description) {
  if (description ) {
    const taskItem = new Task(description, id = 1, completed = false);
    let tasks;
    if (localStorage.getItem('task') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('task'));
    }
    tasks.push(taskItem);
    localStorage.setItem('task', JSON.stringify(tasks));
    tasks = JSON.parse(localStorage.getItem('task'))
    tasks.forEach((task) => {

      const elementList = globaldocument.querySelector('.list');
      const listItem = document.createElement('li');
      listItem.setAttribute('class', 'item');
        listItem.innerHTML = `<input type="checkbox" id='${task.id}' name="taskStatus" class = 'taskStatus'>
                        <p class='description edit' contenteditable='true' id='${task.id}'>${task.description}</p>
                        <i class="fas fa-trash-alt remove-btn" id='${task.id}'></i>`;
  
      elementList.appendChild(listItem);
          
    });

    return true;
    
  }
  else{
    return false;
  }

}

module.exports = addItem1;

