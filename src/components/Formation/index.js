import React from 'react';

import './formation.scss';
import oclock from './logo-oclock.png';
import openclassrooms from './logo-openclassrooms.png';

const Presentation = () => (
  <div className="formation" id="formation">
    <h1 className="formation-title">Formation</h1>
    <img src={oclock} alt="icone_oclock" className="formation-image" />
    <h2 className="formation-title-cours oclock">O'clock</h2>
    <ul className="formation-liste">
      <li className="formation-liste-item">- 3 mois de socle : Cours intensifs (700 h) avec mise en pratique</li>
      <li className="formation-liste-item">- 1 mois de spécialisation : React</li>
      <li className="formation-liste-item">- 1 mois de projet de fin d’étude</li>
    </ul>
    <img src={openclassrooms} alt="icone_openclassrooms" className="formation-image" />
    <h2 className="formation-title-cours openclassrooms">openclassrooms</h2>
    <p className="formation-desc">Diplômes obtenus :</p>
    <ul className="formation-liste">
      <li className="formation-liste-item">- Apprenez à créer votre site web avec HTML5 et CSS3</li>
      <li className="formation-liste-item">- Créer votre code avec Git et GitHub</li>
      <li className="formation-liste-item">- Comprendre le web</li>
    </ul>
  </div>
);

export default Presentation;
