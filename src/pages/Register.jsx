import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import GoogleIcon from '../Images/google.png';
import FacebookIcon from '../Images/facebook.png';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: ""
  });
  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repassword) {
      setError("Passwords do not match!");
      return;
    }

    navigate("/login", { state: { message: "Registered successfully! Please login." } });
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Register</h2>

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="repassword">Re-enter Password</label>
        <input
          type="password"
          id="repassword"
          name="repassword"
          placeholder="Re-enter your password"
          value={formData.repassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <div className="or-divider">OR</div>

        <div className="social-login">
          <button type="button" className="social-btn google-btn">
  <img src={GoogleIcon} alt="Google" />
</button>
<button type="button" className="social-btn facebook-btn">
  <img src={FacebookIcon} alt="Facebook" />
</button>

        </div>

        <div className="register-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
