import React, { useState } from 'react';
import './login.css'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate()

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert("Please enter both email and password.");
    } else {
      localStorage.setItem("login", "true");
      alert("You are logged in!");
      navigate("/");
    }
  };
   
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      {showLogin ? (
        <form>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
        </form>
      ) : (
        <button type="button" onClick={() => setShowLogin(true)} className="login-button">
          Show Login Form
        </button>
      )}
    </div>
  );
}

export default Login;
