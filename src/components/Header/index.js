import React from 'react';
import { IoMdDownload, IoIosEye } from 'react-icons/io';

import './header.scss';
import couverture from './couverture.jpg';

const Header = () => (
  <div className="header">
    <h1 className="header-title">Portfolio</h1>
    <img src={couverture} alt="couverture" className="header-image" />
    <p className="header-desc">
    Hey ! Je suis <span className="header-name">Baptiste Parville</span>
    , Développeur Web et Web Mobile vivant en région parisienne.
    </p>
    <div className="header-group-btn">
      <a href="src/components/Header/CV.pdf" className="header-link"><button type="button" className="header-btn">Voir mon CV ! <span className="icon"><IoIosEye /></span></button></a>
      <a href="src/components/Header/CV.pdf" className="header-link" download><button type="button" className="header-btn">Télécharger mon CV ! <span className="icon"><IoMdDownload /></span></button></a>
    </div>
  </div>
);

export default Header;
