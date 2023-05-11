/* eslint-disable */
import { readTask, updateTask } from './localStorage.js';
import { renderTasks } from '../index.js';

export function handleUpdateBtnClick(event) {
  const index = parseInt(event.target.dataset.index);
  const tasks = readTask();
  const task = tasks[index];

  const taskText = task.text;

  const input = document.createElement('input');
  input.type = 'text';
  input.value = taskText;

  const updateBtn = document.createElement('button');
  updateBtn.textContent = 'Edit';

  const li = event.target.closest('li');
  li.insertBefore(input, event.target);
  li.insertBefore(updateBtn, event.target);

  event.target.style.display = 'none';
  const taskTextSpan = li.querySelector('.task-text');
  if (taskTextSpan) {
    taskTextSpan.style.display = 'none';
  }

  function handleUpdate() {
    const newTaskText = input.value.trim();
    if (newTaskText && newTaskText !== taskText) {
      task.text = newTaskText;
      updateTask(index, task);
      renderTasks();
    }
    cleanup();
  }

  function handleCancel() {
    cleanup();
  }

  function cleanup() {
    li.removeChild(input);
    li.removeChild(updateBtn);
    event.target.style.display = '';
    if (taskTextSpan) {
      taskTextSpan.style.display = '';
    }
  }

  updateBtn.addEventListener('click', handleUpdate);
  updateBtn.addEventListener('blur', handleCancel);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleUpdate();
    } else if (event.key === 'Escape') {
      handleCancel();
    }
  });
}

export default handleUpdateBtnClick;
