import { globaldocument } from '../../dynamic';
import Task from '..script/task.js';
import addRemove from '../script/addRemove.js';


function addItem() {

    let tasks = JSON.parse(localStorage.getItem('tasks'))
if(tasks){
    tasks.forEach((task) => {
        const elementList = globaldocument.querySelector('.list');
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'item');
    
        listItem.innerHTML = `<input type="checkbox" id='${task.id}' name="taskStatus" class = 'taskStatus'>
                          <p class='description edit' contenteditable='true' id='${task.id}'>${task.description}</p>
                          <i class="fas fa-trash-alt remove-btn" id='${task.id}'></i>`;
    
        elementList.appendChild(listItem);
    
      });
      return tasks;
}
else{
    return false;
}
  

}
  


module.exports = addItem;