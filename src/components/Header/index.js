import React from 'react';

import './header.scss';

const Header = () => (
  <>
    <div className="header">
      <div className="div-one"> </div>
      <div className="div-two"> </div>
      <div className="overlay"> </div>
      <div className="box">
        <h1 className="box-title">Baptiste Parville <br /><hr />Développeur Web Junior</h1>
      </div>
    </div>
    <div className="nav">
      <ul className="nav-ul">
        <li><a href="#presentation">Présentation</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </>
);
export default Header;
