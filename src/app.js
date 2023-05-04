/* eslint-disable import/prefer-default-export */
const todoList = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete Todo project',
    completed: true,
    index: 1,
  },
];

export function displayTodoList() {
  const todoListElement = document.getElementById('todo-list');
  todoListElement.innerHTML = '';
  todoList.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
        <label>
          <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
          <span class="task-text">${task.description}


          
        </label><i class="fa fa-ellipsis-v" aria-hidden="true"></i>

      `;
    todoListElement.appendChild(taskElement);
  });
}
