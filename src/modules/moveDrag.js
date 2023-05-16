/* eslint-disable */
import { readTask } from './localStorage.js';
import { renderTasks } from '../index.js';

let dragIndex;

export const handleDragStart = (event) => {
  dragIndex = parseInt(event.currentTarget.dataset.index, 10);
  event.dataTransfer.setData('text/plain', dragIndex);
};

export const handleDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

export const handleDrop = (event) => {
  const dropIndex = parseInt(event.currentTarget.dataset.index, 10);
  if (dragIndex !== dropIndex) {
    const tasks = readTask();
    const [task] = tasks.splice(dragIndex, 1);
    tasks.splice(dropIndex, 0, task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
};

export default { handleDragStart, handleDragOver, handleDrop };
