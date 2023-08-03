import { saveData } from './localStorage.js';

const updateStatus = (todoCheck, sortedList, i) => {
  todoCheck.classList.toggle('checked');
  if (todoCheck.classList.contains('checked')) {
    sortedList[i].completed = true;
  } else {
    sortedList[i].completed = false;
  }
  saveData(sortedList);
};

export default updateStatus;