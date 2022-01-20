const taskList = document.querySelector(".list");
let arr = [];
let task = [
  {
    id: 0,
    description: "Wash the dish",
    completed: false,
  },
  {
    id: 1,
    description: "Complete the to do list",
    completed: false,
  },
  {
    id: 2,
    description: "Take a break",
    completed: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  task.forEach((elem, num) => {
    arr.push(elem);
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "item");
    listItem.innerHTML = `<i class="far fa-square" id=${task[num].id}></i>
    <p class='description'>${task[num].description}</p>
    <i class="fas fa-ellipsis-v"></i>`;
    taskList.appendChild(listItem);
  });
});
