/* eslint-disable*/
import './styles/main.css';
import {createTask} from './modules/AddTodo.js';
import {handleUpdateBtnClick } from './modules/EditTodo.js';
import { readTask, updateTask, deleteTask } from './modules/localStorage.js';

const task=updateTask();

const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const deleteBtn = document.querySelector('.delet-btn');

// Render the list of tasks
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
      <button type="button" class="update-btn" data-index="${index}"><i class='fas fa-edit'></i></button>
      <button type="button" class="delete-btn" data-index="${index}"><i class='far fa-trash-alt'></i></button>
      <i class='fas fa-ellipsis-v'></i>
    `;
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    const taskText = li.querySelector('.task-text');
    taskText.style.flexGrow = '1';
    taskText.style.display = 'block';
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.style.display = 'none'; // Initially hide the delete button
    deleteBtn.addEventListener('click', handleDeleteBtnClick);
    const updateBtn = li.querySelector('.update-btn');
    updateBtn.style.width = '40px';
    updateBtn.style.display = 'none'; // Initially hide the update button
    updateBtn.addEventListener('click', handleUpdateBtnClick);
    const ellipsisIcon = li.querySelector('.fa-ellipsis-v');
    ellipsisIcon.addEventListener('click', () => {
      deleteBtn.style.display = deleteBtn.style.display === 'none' ? 'block' : 'none';
      updateBtn.style.display = updateBtn.style.display === 'none' ? 'block' : 'none';
    });
    todoList.appendChild(li);
  });
}




// Handle click event on the delete button
function handleDeleteBtnClick(event) {
  const { index } = event.currentTarget.dataset;
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
