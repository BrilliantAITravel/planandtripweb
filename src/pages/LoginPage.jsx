import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import GoogleIcon from '../Images/google.png';
import FacebookIcon from '../Images/facebook.png';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/next');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleLogin}>
          <label>Email or Phone Number</label>
          <input
            type="text"
            placeholder="Enter your email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Sign In</button>
        </form>

       {/* Divider text */}
<div className="or-divider">
  <span>or continue with</span>
</div>

{/* Social buttons */}
<div className="social-login">
  <button className="social-btn google-btn">
     <img src={GoogleIcon} alt="Google" />
  </button>
  <button className="social-btn facebook-btn">
<img src={FacebookIcon} alt="Facebook" />
  </button>
</div>
 {/* Register link at the bottom */}
  <div className="register-link">
    Don't have an account yet? <a href="/register">Register</a>
  </div>
      </div>
    </div>
  );
}

export default LoginPage;
