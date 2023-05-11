/* eslint-disable */
import './styles/main.css';
import {createTask} from './modules/AddTodo.js';
import { handleUpdateBtnClick } from './modules/EditTodo.js';
import { readTask,updateTask, deleteTask} from './modules/localStorage.js';
import { handleDragStart, handleDragOver, handleDrop } from './modules/moveDrag.js';

const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const deleteBtn = document.querySelector('.delet-btn');
const clearCompletedBtn = document.querySelector('#clear-completed-btn');

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
    li.draggable = true;
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragover', handleDragOver);
    li.addEventListener('drop', handleDrop);
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    const taskText = li.querySelector('.task-text');
    taskText.style.flexGrow = '1';
    taskText.style.display = 'block';
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.style.display = 'none';
    deleteBtn.addEventListener('click', handleDeleteBtnClick);
    const updateBtn = li.querySelector('.update-btn');
    updateBtn.style.width = '40px';
    updateBtn.style.display = 'none';
    updateBtn.addEventListener('click', handleUpdateBtnClick);
    const ellipsisIcon = li.querySelector('.fa-ellipsis-v');
    ellipsisIcon.addEventListener('click', () => {
      deleteBtn.style.display = deleteBtn.style.display === 'none' ? 'block' : 'none';
      updateBtn.style.display = updateBtn.style.display === 'none' ? 'block' : 'none';
    });
    todoList.appendChild(li);
  });
}

function handleDeleteBtnClick(event) {
  const li = event.currentTarget.closest('li');
  const index = li.querySelector('.delete-btn').dataset.index;
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
// readTask();
updateTask();

clearCompletedBtn.addEventListener("click", clearCompleted);

function clearCompleted() {
  const tasks = readTask();
  const updatedTasks = tasks.filter(task => !task.completed);
  updatedTasks.forEach((task, index) => {
    task.id = index; 
  });
  updateTask(updatedTasks); 
  renderTasks(); 
}

// Add event listener to each checkbox
todoList.addEventListener("change", function(event) {
  if (event.target.matches("input[type='checkbox']")) {
    const checkbox = event.target;
    const listItem = checkbox.closest("li"); 
    const index = checkbox.dataset.index;
    const tasks = readTask();

    tasks[index].completed = checkbox.checked;
    updateTask(tasks); 

    if (checkbox.checked) {
      listItem.classList.add("completed"); 
    } else {
      listItem.classList.remove("completed");
    }
  }
});


export { renderTasks };
