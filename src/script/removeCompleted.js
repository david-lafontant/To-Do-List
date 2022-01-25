export default function taskCompleted() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  const arr1 = tasks.filter((el) => el.completed === false);
  tasks = arr1;
  tasks.forEach((element, index) => {
    element.id = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}