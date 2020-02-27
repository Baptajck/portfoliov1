/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './contact.scss';

const Contact = () => (
  <div className="contact" id="contact">
    <h1 className="contact-title">Contact</h1>
    <hr className="contact-hr" />
    <div className="contact-container">
      <p className="contact-desc"><a href="mailto:baptiste.parville@gmail.com" className="contact-link">baptiste.parville@gmail.com</a></p>
      <p className="contact-desc"><a href="https://www.linkedin.com/in/baptiste-parville/" className="contact-link">LinkedIn</a></p>
    </div>
  </div>
);

export default Contact;
  