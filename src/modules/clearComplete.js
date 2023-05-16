/* eslint-disable */
import { renderTasks } from '../index.js';
import { readTask, updateTask } from './localStorage.js';

export const clearCompleted = () => {
  const tasks = readTask();
  const updatedTasks = tasks.filter((task) => !task.completed);
  updatedTasks.forEach((task, index) => {
    task.id = index;
  });
  updateTask(updatedTasks);
  renderTasks();
};

export default clearCompleted;
