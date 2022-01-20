import './index.css';

const taskList = document.querySelector('.list');
const task = [
  {
    id: 0,
    description: 'Wash the dish',
    completed: false,
  },
  {
    id: 1,
    description: 'Complete the to do list',
    completed: false,
  },
  {
    id: 2,
    description: 'Take a break',
    completed: false,
  },
  {
    id: 3,
    description: 'Buy groceries',
    completed: false,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  task.forEach((elem) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'item');
    listItem.innerHTML = `<i class="far fa-square" id=${elem.id}></i>
    <p class='description'>${elem.description}</p>
    <i class="fas fa-ellipsis-v"></i>`;
    taskList.appendChild(listItem);
  });
});
