import React from 'react';

import './projets.scss';
import gamebook from './GameBook.jpg';
import likemovie from './Logo-cinépole.jpg';

const Projets = () => (
  <div className="projets" id="projets">
    <h1 className="projets-title">Projets</h1>
    <hr className="projets-hr" />
    <div className="projets-container">
      <div className="projets-container-solo">
        <img src={gamebook} alt="" className="projets-image-pro" />
        <h2 className="projets-title-pro"><a href="http://gamebook.tech/" rel="noopener noreferrer" target="_blank">Gamebook</a></h2>
        <p className="projets-lang">HTML, CSS, Javascript, ReactJS ,NodeJS, MySQL</p>
        <p className="projets-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ex eos nihil quasi quis neque molestias cumque harum? Nulla temporibus inventore totam facilis quaerat voluptates perspiciatis quae neque incidunt id!</p>
      </div>
      <div className="projets-container-solo">
        <img src={likemovie} alt="" className="projets-image-pro" />
        <h2 className="projets-title-pro"><a href="http://likemovie.baptjack.fr/" rel="noopener noreferrer" target="_blank">Likemovie</a></h2>
        <p className="projets-lang">HTML, CSS, Javascript, ReactJS</p>
        <p className="projets-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ex eos nihil quasi quis neque molestias cumque harum? Nulla temporibus inventore totam facilis quaerat voluptates perspiciatis quae neque incidunt id!</p>
      </div>
    </div>
  </div>
);

export default Projets;
