import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {   // ✅ fixed arrow function
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo-bar">
        <h2 className="logo-test">
          FSD<span>JOB</span>
        </h2>
      </div>

      {/* Search bar */}
      <div className="search-icon-bar">
        <input type="text" placeholder="Search jobs..." />
        <button>Search</button>
      </div>

      {/* Desktop nav links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Jobs</a></li>
        </ul>

        <div className="login-signup">
          <button onClick={() => setShowLogin(true)} className="login-btn">
            Login
          </button>
          <button onClick={() => setShowLogin(true)} className="signup-btn">
            Sign Up
          </button>
        </div>
      </div>

      {/* Hamburger menu */}
      <div
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </div>
  );
};

export default Navbar;
