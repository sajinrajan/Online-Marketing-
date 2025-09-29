import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [mode, setMode] = useState("Login"); // state to toggle between Login/Signup

  return (
    <div className="login-popup-overlay">
      <div className="login-popup-content">
        
        {/* Header with close button */}
        <div className="popup-header">
          <h2>{mode}</h2>
          <button className="close-btn" onClick={() => setShowLogin(false)}>
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="popup-form">
          {/* If Sign Up mode → show username */}
          {mode === "Sign Up" && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit" className="submit-btn">
            {mode === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </form>

        {/* Switch mode text */}
        <p className="switch-mode">
          {mode === "Login" ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setMode("Sign Up")}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setMode("Login")}>Login</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
