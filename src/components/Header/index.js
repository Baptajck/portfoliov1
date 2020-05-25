import React, { useState, useEffect } from 'react';

import './header.scss';

import pcDesktop1600 from './images/pc_desktop_1600w2.jpg';
import pcDesktop3200 from './images/pc_desktop_3200w2.jpg';

import logo800 from './images/logo2_800w.jpg';
import logo1600 from './images/logo2_1600w.jpg';
import logo3200 from './images/logo2_3200w.jpg';

const Header = () => {
  const [navbar, setNavBar] = useState('');
  const [image, setImage] = useState('');

  const toggleVisibility = () => {
    if (window.pageYOffset > 731.2000122070312) {
      setNavBar('nav-fixed');
      setImage('nav-img-fixed');
    }
    else {
      setNavBar('');
      setImage('');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      toggleVisibility();
    });
  }, []);
  return (
    <>
      <div className="header">
        <div className="header-image">
          <img srcSet={`${pcDesktop3200} 3200w, ${pcDesktop1600} 1600w`} src={pcDesktop1600} alt="deuxième de l'en-tête" />
        </div>
        <div className="box">
          <h1 className="box-title">Baptiste Parville <br /><hr />Développeur Web Junior</h1>
        </div>
      </div>

      <div>
        <nav className={`nav ${navbar}`} role="navigation">
          <picture>
            <source type="image/jpg" media="(max-width: 500px)" srcSet={`${logo800} 1x`} />
            <img srcSet={`${logo3200} 3200w, ${logo1600} 1600w`} src={logo1600} className={`nav-img ${image}`} alt="logo baptjack" />
          </picture>
          <ul className="nav-ul">
            <li><a href="#presentation" className="nav-ul-link">Présentation</a></li>
            <li><a href="#competences" className="nav-ul-link">Compétences</a></li>
            <li><a href="#projets" className="nav-ul-link">Projets</a></li>
            <li><a href="#contact" className="nav-ul-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
