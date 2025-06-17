const root = document.getElementById('root');

const loginform = () => {
  const str = `
    <h3>Login form</h3>
     <label for="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" required />
      <br /><br />
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" required />
      <br /><br />
    
    <p><button onclick="showhome()">Home</button></p>
    <p><button onclick="registerform()">Create account</button></p>
  `;
  root.innerHTML = str;
};

const registerform = () => {
  const str = `
    <h3>Register form</h3>
     <label for="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" required />
      <br /><br />
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" required />
        <br /><br />
      <label for="password">Confirm Password:</label>
      <input type="password" id="password" placeholder="confirm your password" required />
      
      <br /><br />
    <p><button onclick="loginform()">Login</button></p>

  `;
  root.innerHTML = str;
};

const showhome = () => {
  const str = `
    <h3>Home page</h3>

    <p><button onclick="loginform()">Login</button></p>
    <p><button onclick="registerform()">Register</button></p>
  `;
  root.innerHTML = str;
};

