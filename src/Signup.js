import './signup.css'; 
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(true);

  const navigate = useNavigate();

  const handleSignup = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert("Please enter both email and password.");
    } else {
      
      alert("Signup successful! You can now log in.");
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {showSignup ? (
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
          <button type="button" onClick={handleSignup} className="signup-button">
            Signup
          </button>
        </form>
      ) : (
        <button type="button" onClick={() => setShowSignup(true)} className="signup-button">
          Show Signup Form
        </button>
      )}
    </div>
  );
}

export default Signup;
