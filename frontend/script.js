const taskForm = document.querySelector('#add-task');
const taskList = document.querySelector('#tasks');
const myTaskList = document.querySelector('#my-tasks');

const signupButton = document.getElementById('signup-btn');
const loginButton = document.getElementById('login-btn');
const signupPopup = document.getElementById('signup-popup');
const loginPopup = document.getElementById('login-popup');

signupButton.addEventListener('click', () => {
    signupPopup.style.display = 'block';
});

loginButton.addEventListener('click', () => {
    loginPopup.style.display = 'block';
});


let tasks = [];

function addTask(event) {
    event.preventDefault();

    const taskName = taskForm.querySelector('input[name="taskName"]').value;
    const assignedTo = taskForm.querySelector('input[name="assignedTo"]').value;
    const dueDate = taskForm.querySelector('input[name="dueDate"]').value;
    console.log(taskName);
    console.log(assignedTo);
    console.log(dueDate);
    const task = {
        name: taskName,
        assignedTo: assignedTo,
        dueDate: dueDate
    };

    tasks.push(task);
    

    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <h3>${task.name}</h3>
            <p>Assigned to: ${task.assignedTo}</p>
            <p>Due Date: ${task.dueDate}</p>
        `;

        taskList.appendChild(taskItem);
    });

    displayMyTasks();
}

function displayMyTasks() {
    const currentUser = 'JohnDoe';

    const myTasks = tasks.filter(task => task.assignedTo === currentUser);

    myTaskList.innerHTML = '';

    myTasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <h3>${task.name}</h3>
            <p>Due Date: ${task.dueDate}</p>
        `;

        myTaskList.appendChild(taskItem);
    });
}

taskForm.addEventListener('submit', addTask);

displayTasks();
