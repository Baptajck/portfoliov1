/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
  LinkedinIcon,
  TwitterIcon,
  PinterestIcon,
} from 'react-share';


import './contact.scss';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">Contact</h1>
      <hr className="contact-hr" />
      <div className="contact-container">
        <p className="contact-desc"><a href="mailto:baptiste.parville@protonmail.com" className="contact-link-mail">baptiste.parville@protonmail.com</a></p>
      </div>
      <div className="contact-group-link">
        <a href="https://www.linkedin.com/in/baptiste-parville/" rel="noopener noreferrer" target="_blank" title="LinkedIn" className="contact-group-link-item"> <LinkedinIcon size={40} round /></a>
        <a href="https://twitter.com/baptjacky" rel="noopener noreferrer" target="_blank" title="Pinterest" className="contact-group-link-item"> <PinterestIcon size={40} round /></a>
        <a href="https://www.pinterest.fr/Baptjack/" rel="noopener noreferrer" target="_blank" title="Twitter" className="contact-group-link-item"> <TwitterIcon size={40} round /></a>
      </div>
    </div>
  );
};
export default Contact;
