import './css/style.css';
import ToDoCRUD from './modules/todoCRUD.js';

const todo = new ToDoCRUD();
const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const description = document.getElementById('add-task').value;
  if (description !== '') {
    todo.addItem(description);
  }
});

// display updated todo list when user click on refresh btn
const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', () => {
  todo.display();
});

// Delete all completed task when user click on clear btn
const clearCompletedBtn = document.getElementById('clear');
clearCompletedBtn.addEventListener('click',
  () => {
    todo.clearCompleted();
  });

document.getElementById('add-task').addEventListener('keypress', (event) => {
  const description = document.getElementById('add-task').value;
  if (event.key === 'Enter' && description !== '' && todo.addItem) {
    event.preventDefault();
    todo.addItem(description);
  }
});

window.addEventListener('load', () => {
  todo.display();
});
