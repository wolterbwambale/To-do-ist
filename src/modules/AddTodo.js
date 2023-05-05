/* eslint-disable import/prefer-default-export */
const STORAGE_KEY = 'todos';

function readTask() {
  const tasks = localStorage.getItem(STORAGE_KEY);
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
}

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
