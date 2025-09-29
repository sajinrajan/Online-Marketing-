import React from 'react';
import './WebsiteDisplay.css';
import kfc from '../../assets/assets/kfc.jpg';
import BikeSite from '../../assets/assets/Bike Site.jpg';
import CoffeSite from '../../assets/assets/CoffeSite.jpg';
import Design from '../../assets/assets/Design.jpg';
import GardenSit from '../../assets/assets/GardenSit.jpg';
import greenjus from '../../assets/assets/greenjus.jpg';
import shoosSit from '../../assets/assets/shoosSit.jpg';
import SottilSit from '../../assets/assets/SottilSit.jpg';
import las from '../../assets/assets/las.jpg';
import ice from '../../assets/assets/ice.jpg';
import house from '../../assets/assets/house.jpg';
import traval from '../../assets/assets/traval.jpg';

const WebsiteDisplay = () => {
  return (
    <div className="website-display">
      <div className="image-add-section">
        <div className="add-section-text">
          <img src={kfc} alt="" />
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
          <img src={CoffeSite} alt="" />
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
          <img src={greenjus} alt="" />
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
          <img src={SottilSit} alt="" />
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
          <img src={traval} alt="" />
          <h2>Travel</h2>
          <p>Click here to add a new section to your website.</p>
        </div>
        <button value={SubmitEvent}> More</button>

      </div>
      
    </div>
  );
};

export default WebsiteDisplay;
