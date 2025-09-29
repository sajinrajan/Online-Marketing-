import React from 'react';
import './WebsiteDisplay.css';
import KFC from '../../assets/assets/KFC.jpg';
import BikeSite from '../../assets/assets/Bike Site.jpg';
import CoffeeSite from '../../assets/assets/CoffeeSite.jpg';
import Design from '../../assets/assets/Design.jpg';
import GardenSit from '../../assets/assets/GardenSit.jpg';
import greenJuice  from '../../assets/assets/greenJuice.jpg';
import shoosSit from '../../assets/assets/shoosSit.jpg';
import Bottle from '../../assets/assets/Bottle.jpg';
import las from '../../assets/assets/las.jpg';
import ice from '../../assets/assets/ice.jpg';
import house from '../../assets/assets/house.jpg';
import Travel from '../../assets/assets/Travel.jpg';

const WebsiteDisplay = () => {
  return (
    <div className="website-display">
      <div className="image-add-section">
        <div className="add-section-text">
          <img src={KFC} alt="" />
          <h2>KCF Chicken</h2>
          <p>“Crispy, juicy KFC chicken delivers unbeatable flavor in every bite.”</p>
        </div>
        <button value={SubmitEvent}> More</button>
      </div>

      <div className="image-add-section">
        <div className="add-section-text">
          <img src={BikeSite} alt="" />
          <h2>Bike</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>

      <div className="image-add-section">
        <div className="add-section-text">
          <img src={CoffeeSite} alt="" />
          <h2>Coffee</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>

      <div className="image-add-section">
        <div className="add-section-text">
          <img src={Design} alt="" />
          <h2>Headset</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>

       <div className="image-add-section">
        <div className="add-section-text">
          <img src={GardenSit} alt="" />
          <h2>Tourism</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>

      <div className="image-add-section">
        <div className="add-section-text">
          <img src={greenJuice} alt="" />
          <h2>Starbucks Mocha Frappuccino  ice cream.</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>

      <div className="image-add-section">
        <div className="add-section-text">
          <img src={shoosSit} alt="" />
          <h2>Shoes</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>

      <div className="image-add-section">
        <div className="add-section-text">
          <img src={las} alt="" />
          <h2>Lay's</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>
       <div className="image-add-section">
        <div className="add-section-text">
          <img src={Bottle} alt="" />
          <h2>Bottle</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>

      <div className="image-add-section">
        <div className="add-section-text">
          <img src={ice} alt="" />
          <h2>Starbucks Mocha Frappuccino Coffee Drink.</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>
      </div>

      <div className="image-add-section">
        <div className="add-section-text">
          <img src={house} alt="" />
          <h2>House.</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>

      <div className="image-add-section">
        <div className="add-section-text">
          <img src={Travel} alt="" />
          <h2>Travel</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>
      
    </div>
  );
};

export default WebsiteDisplay;
