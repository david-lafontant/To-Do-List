export default function taskCompleted() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  const arr1 = tasks.filter((el) => el.completed === false);
  console.log(arr1);
  tasks = arr1;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}