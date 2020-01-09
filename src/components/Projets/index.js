import React from 'react';

import './projets.scss';
import projet from './projet-couverture.jpg';
import gamebook from './GameBook.jpg';
import likemovie from './Logo-cinépole.jpg';

const Projets = () => (
  <div className="projets" id="projets">
    <img src={projet} alt="Photo_de_couverture" className="projets-image" />
    <h1 className="projets-title">Projets</h1>
    <div className="projets-container">
      <div className="projets-container-solo">
        <img src={gamebook} alt="" className="projets-image-pro" />
        <h2 className="projets-title-pro">Gamebook</h2>
      </div>
      <div className="projets-container-solo">
        <img src={likemovie} alt="" className="projets-image-pro" />
        <h2 className="projets-title-pro">Likemovie</h2>
      </div>
    </div>
  </div>
);

export default Projets;
