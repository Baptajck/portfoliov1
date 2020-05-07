import React, { useState, useEffect } from 'react';

import './header.scss';

const Header = () => {
  const [navbar, setNavBar] = useState('');
  const [image, setImage] = useState('');

  const toggleVisibility = () => {
    if (window.pageYOffset > 759.2000122070312) {
      setNavBar('nav-fixed');
      setImage('nav-img-fixed');
    }
    else {
      setNavBar('');
      setImage('');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      toggleVisibility();
    });
  }, []);
  return (
    <>
      <div className="header">
        <div className="div-one"> </div>
        <div className="div-two"> </div>
        <div className="overlay"> </div>
        <div className="box">
          <h1 className="box-title">Baptiste Parville <br /><hr />Développeur Web Junior</h1>
        </div>
      </div>
      {}
      <div className={`nav ${navbar}`}>
        <ul className="nav-ul">
          <img src="https://i.imgur.com/cLUxH7U.png" alt="color" className={`nav-img ${image}`} />
          <li><a href="#presentation" className="nav-ul-link">Présentation</a></li>
          <li><a href="#competences" className="nav-ul-link">Compétences</a></li>
          <li><a href="#projets" className="nav-ul-link">Projets</a></li>
          <li><a href="#contact" className="nav-ul-link">Contact</a></li>
        </ul>
      </div>
    </>
  );
};
export default Header;
