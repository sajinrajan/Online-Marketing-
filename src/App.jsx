import React, { useState } from 'react';   
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import WebsiteDisplay from './Components/WebsiteDisplay/WebsiteDisplay.jsx';
import FoodDisplay from './Components/FoodDisplay/FoodDisplay.jsx';
import LoginPopup from './Components/LoginPopup/LoginPopup.jsx';
import Contact from './Components/Contact/Contact.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Show login popup only when triggered */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Header />
        <WebsiteDisplay />
        <Contact/>
        <FoodDisplay />

      </div>
    </>
  );
};

export default App;
