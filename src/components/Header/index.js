import React, { useState, useEffect } from 'react';

import './header.scss';
import code800 from './images/code_800w.jpg';
import code1600 from './images/code_1600w.jpg';
import code3200 from './images/code_3200w.jpg';
// import codeWeb from './images/code_1600w.webp';

import pcDesktop800 from './images/pc_desktop_800w.jpg';
import pcDesktop1600 from './images/pc_desktop_1600w.jpg';
import pcDesktop3200 from './images/pc_desktop_3200w.jpg';
// import pcDesktopWeb from './images/pc_desktop_1600w.webp';

import logo800 from './images/logo2_800w.jpg';
import logo1600 from './images/logo2_1600w.jpg';
import logo3200 from './images/logo2_3200w.jpg';
// import logoWeb from './images/logo2_1600w.webp';

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

        <div className="div-one">
          <picture>
            <source type="image/jpg" media="(max-width: 750px)" srcSet={`${code800} 800w`} />
            {/* <source type="image/webp" srcSet={codeWeb} /> */}
            <img srcSet={`${code3200} 3200w, ${code1600} 1600w`} src={code1600} alt="première de l'en-tête" />
          </picture>
        </div>

        <div className="div-two">
          <picture>
            <source type="image/jpg" media="(max-width: 750px)" srcSet={`${pcDesktop800} 800w`} />
            {/* <source type="image/webp" srcSet={pcDesktopWeb} /> */}
            <img srcSet={`${pcDesktop3200} 3200w, ${pcDesktop1600} 1600w`} src={pcDesktop1600} alt="deuxième de l'en-tête" />
          </picture>
        </div>

        <div className="overlay"> </div>
        <div className="box">
          <h1 className="box-title">Baptiste Parville <br /><hr />Développeur Web Junior</h1>
        </div>
      </div>

      <div>
        <nav className={`nav ${navbar}`} role="navigation">
          <picture>
            <source type="image/jpg" media="(max-width: 500px)" srcSet={`${logo800} 1x`} />
            {/* <source type="image/webp" srcSet={logoWeb} /> */}
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
