import React from 'react';
import './Header.css';
import cartoon from '../../assets/assets/cartoon.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        {/* Left Side - Image */}
        <div className="header-image">
          <img src={cartoon} alt="cartoon" />
        </div>

        {/* Right Side - Text + Button */}
        <div className="header-text">
          <h1>Get the best website builder services</h1>
          <p>
            Find the best website builder services you need to help you successfully 
            meet your project planning goals and deadline.
          </p>
          <button>Join Fiverr</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
