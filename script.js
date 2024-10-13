const validateLogin = () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace with your own username and password logic
  const correctUsername = 'admin';
  const correctPassword = 'rx7fan';

  if (username === correctUsername && password === correctPassword) {
    // Redirect to another page if the login is successful
    window.location.href = 'index2.html';
  } else {
    alert('Incorrect username or password.');
  }
}
