import React from 'react';
import { IoMdDownload, IoIosEye, IoIosArrowDown } from 'react-icons/io';

import './header.scss';
import couverture from './couverture_2.png';


const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(728, 728);
  };
  return (
    <div className="header">
      <h1 className="header-title">Baptiste Parville</h1>
      <p className="header-desc">
      Hey ! Bienvenue sur mon portfolio <br />
      Je suis un développeur web et web mobile junior vivant en région parisienne.
      </p>
      <img src={couverture} alt="couverture" className="header-image" />
      <div className="header-group-btn">
        <p><a href="src/components/Header/CV.pdf" className="header-link"><button type="button" className="header-btn">Voir mon CV ! <span className="icon"><IoIosEye /></span></button></a></p>
        <p><a href="src/components/Header/CV.pdf" className="header-link" download><button type="button" className="header-btn">Télécharger mon CV ! <span className="icon"><IoMdDownload /></span></button></a></p>
        <div className="header-icon animated infinite bounce" onClick={scrollToTop}><IoIosArrowDown /></div>
      </div>
    </div>
  );
};
export default Header;
