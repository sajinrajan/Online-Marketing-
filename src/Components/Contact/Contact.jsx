import React from 'react'
import './Contact.css'
import contact from '../../assets/assets/contact.jpg'

const Contact = () => {
  return (
    <div className="contact">
      {/* Left form */}
      <div className="form-section">
        <h2>Create an account</h2>
        <p>Sign up and get 30 day free trial</p>

        <div className="form-group">
          <input type="text" placeholder="Full name" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>

        <button type="submit">Submit</button>

        <div className="social-login">
          <button> Apple</button>
          <button>Google</button>
        </div>
      </div>

      {/* Right image */}
      < div className="image-section">
            <img src={contact} alt="contact" />
      </div>
    </div>
  )
}

export default Contact
