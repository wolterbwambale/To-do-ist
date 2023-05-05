let dragIndex;

function readTask() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

function renderTasks() {
  // Define the renderTasks function
  // ...
}

export function handleDragStart(event) {
  dragIndex = parseInt(event.currentTarget.dataset.index, 10);
  event.dataTransfer.setData('text/plain', dragIndex);
}

export function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

export function handleDrop(event) {
  const dropIndex = parseInt(event.currentTarget.dataset.index, 10);
  if (dragIndex !== dropIndex) {
    const tasks = readTask();
    const [task] = tasks.splice(dragIndex, 1);
    tasks.splice(dropIndex, 0, task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

export default { handleDragStart, handleDragOver, handleDrop };
