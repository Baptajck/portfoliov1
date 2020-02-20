/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './contact.scss';

const Contact = () => (
  <div className="contact" id="contact">
    <h1 className="contact-title">Contact</h1>
    <form className="contact-form-group">
      <label htmlFor="" className="contact-form-label"> Nom
        <input type="text" placeholder="Nom" className="contact-form-input" />
      </label>
    </form>
  </div>
);

export default Contact;
