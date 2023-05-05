/* eslint-disable*/
// Handle click event on the update button
export function handleUpdateBtnClick(event) {
  const { index } = event.target.dataset;
  const task = readTask()[index];
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
  taskTextSpan.style.display = 'none';

  updateBtn.addEventListener('click', () => {
    const newTaskText = input.value.trim();
    if (newTaskText && newTaskText !== taskText) {
      updateTask(index, newTaskText);
      renderTasks();
    }
  });
}

export default handleUpdateBtnClick;