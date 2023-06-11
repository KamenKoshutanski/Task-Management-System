let users = [];

if (localStorage.getItem('users')) {
  users = JSON.parse(localStorage.getItem('users'));
}

function login() {
  const username = document.querySelector('#login-username').value;
  const password = document.querySelector('#login-password').value;

  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    console.log('Login successful');
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    location.reload();
  } else {
    console.log('Invalid username or password');
  }
}

function signUp() {
  const username = document.querySelector('#signup-username').value;
  const password = document.querySelector('#signup-password').value;

  users.push({ username, password });
  saveUsersToLocalStorage();
  location.reload();
  console.log('Sign up successful');
}

function saveUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}

document.querySelector('#login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  login();
});

document.querySelector('#signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  signUp();
});
