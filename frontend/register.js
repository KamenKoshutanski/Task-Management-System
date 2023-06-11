function login() {
    const username = document.querySelector('#login-username').value;
    const password = document.querySelector('#login-password').value;
  
    if (username === 'user1' && password === 'password1') {
      console.log('Login successful');
    } else {
      console.log('Invalid username or password');
    }
  }
  
  function signUp() {
    const username = document.querySelector('#signup-username').value;
    const password = document.querySelector('#signup-password').value;
  
    console.log('Sign up successful');
  }
  
  document.querySelector('#login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
  });
  
  document.querySelector('#signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    signUp();
  });
  