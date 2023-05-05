/* eslint-disable*/
import './styles/main.css';
import {createTask, readTask, updateTask, deleteTask,} from './app.js';

const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const deleteBtn = document.querySelector('.delet-btn');

function renderTasks() {
  const tasks = readTask();
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input type="checkbox" class="task-checkbox" data-index="${index}">
        <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
      </label>
      <button type="button" class="update-btn" id="update" data-index="${index}"><i class='fas fa-edit'></i></button>
      <button type="button" class="delete-btn" data-index="${index}"><i class='far fa-trash-alt'></i></button>
      <i class='fas fa-ellipsis-v'></i> 
    `;
    const updateBtn = li.querySelector('.update-btn');
    updateBtn.addEventListener('click', handleUpdateBtnClick);
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', handleDeleteBtnClick);
    todoList.appendChild(li);
  });
}

function handleUpdateBtnClick(event) {
  const { index } = event.target.dataset;
  const newTaskText = HTMLInputElement(index);
  if (newTaskText) {
    updateTask(index, newTaskText);
    renderTasks();
  }
}

function handleDeleteBtnClick(event) {
  const { index } = event.target.dataset;
  deleteTask(index);
  renderTasks();
}

const addTaskBtn = document.querySelector('#add-task-btn');
addTaskBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const taskText = todoInput.value.trim();
  if (taskText) {
    const task = createTask(taskText);
    renderTasks();
    todoInput.value = '';
  }
});

deleteBtn.addEventListener('click', () => {
  const completedTasks = readTask().filter((task) => task.completed);
  completedTasks.forEach((task, index) => deleteTask(index));
  renderTasks();
});

renderTasks();
