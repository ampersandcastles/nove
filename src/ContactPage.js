// ContactPage.js
import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">

      <div className="row">
        <div className="left">
          <h1>Contact Us</h1>
          <p>Feel free to reach out to us using the form below.</p>
        </div>

        <div className="right">
          <div className="card">
            <h4>Contact Information</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
