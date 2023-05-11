export const STORAGE_KEY = 'todos';

export function readTask() {
  const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return todos;
}

export function updateTask(index, updatedTask) {
  const tasks = readTask();

  if (index >= 0 && index < tasks.length) {
    tasks[index] = { ...tasks[index], ...updatedTask };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } else {
    console.error('Invalid index for updating task:', index);
  }
}

export function deleteTask(index) {
  const todos = readTask();

  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);

    for (let i = 0; i < todos.length; i += 1) {
      todos[i].index = i;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } else {
    console.error('Invalid index for deleting task:', index);
  }
}

export default {
  updateTask,
  deleteTask,
  readTask,
};
