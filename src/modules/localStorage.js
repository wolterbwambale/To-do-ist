export const STORAGE_KEY = 'todos';

export function readTask() {
  const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return todos;
}

export function updateTask(index, updatedTask) {
  const tasks = readTask();
  tasks[index] = updatedTask;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function deleteTask(index) {
  const todos = readTask();
  todos.splice(index, 1);

  for (let i = index; i < todos.length; i += 1) {
    todos[i].index = i;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
