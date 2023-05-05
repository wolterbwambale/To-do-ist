const STORAGE_KEY = 'todos';

export function readTask() {
  const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return todos;
}

export function createTask(text) {
  const todos = readTask();
  const newTask = {
    text,
    completed: false,
  };
  todos.push(newTask);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  return newTask;
}

export function updateTask(index, newText) {
  const todos = readTask();
  todos[index].text = newText;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function deleteTask(index) {
  const todos = readTask();
  todos.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
