<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login Form</title>
  <style>
    #error-message {
      color: red;
      display: none;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <h2>Login</h2>

  <form id="loginForm">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username"><br><br>
    <button type="submit">Login</button>
    <div id="error-message"></div>
  </form>

  <script>
    document.getElementById('loginForm').addEventListener('submit', function (event) {
      event.preventDefault();

      // Clear any previous error messages
      document.getElementById('error-message').style.display = 'none';

      // Get the value from the username input
      const username = document.getElementById('username').value.trim();

      // Validate the form
      if (username === '') {
        document.getElementById('error-message').textContent = 'Please enter a username';
        document.getElementById('error-message').style.display = 'block';
      } else {
        // Redirect to another page after successful login
        window.location.href = 'index.html'; // Change this to your target page
      }
    });
  </script>

</body>
</html>
