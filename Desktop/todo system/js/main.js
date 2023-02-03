function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    // const btn = document.getElementById('btn');
    // btn.classList.add('btn');
    // const validateInputs = document.getElementById('hello');
    // const h1 = document.createElement('h1');
    // const greeting = document.createTextNode('Hola Mundo');
    // const title = document.getElementById('title');
    // h1.appendChild(greeting);
    // console.log(h1);
    // validateInputs.insertBefore(h1, title);
    // const box2 = document.getElementById('box2');
    // box2.insertAdjacentHTML('afterend', '<div><p> Otro texto mas </p> </div>');
    // console.log(`Username: ${username.value}; Password: ${password.value}`);
    if(username.value === 'admin' && password.value === 'admin') {
        window.location.href = './pages/home.html';
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.classList.remove('hide');
    }
}

function darkMode() {
    const card = document.getElementById("card");
    card.classList.toggle("dark-mode");
}

const app = document.getElementById('app');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function createTask() {
  if (taskInput.value == '') {
    return;
  }
  const task = document.createElement('li');
  task.textContent = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = '';
};