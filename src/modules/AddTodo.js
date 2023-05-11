import { readTask, STORAGE_KEY } from './localStorage.js';

export function createTask(text) {
  const todos = readTask();
  const newTask = {
    text,
    completed: false,
    index: todos.length,
  };
  todos.push(newTask);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  return newTask;
}

export default createTask;