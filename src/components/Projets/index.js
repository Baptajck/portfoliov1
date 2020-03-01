import React from 'react';

import './projets.scss';
import gamebook from './GameBook.jpg';
import likemovie from './likemovie.jpg';

const Projets = () => (
  <div className="projets" id="projets">
    <h1 className="projets-title">Projets</h1>
    <hr className="projets-hr" />
    <p className="projets-subtitle-1">Développement Web Responsive - Mobile First</p>
    <p className="projets-subtitle-2">Compatible mobiles, tablettes et PC</p>
    <div className="projets-container">
      <div className="projets-container-solo">
        <img src={gamebook} alt="" className="projets-image-pro" id="gamebook" />
        <div className="projets-container-solo-2">
          <h2 className="projets-title-pro"><a href="http://gamebook.tech/" rel="noopener noreferrer" target="_blank">Gamebook</a></h2>
          <p className="projets-role">Développeur Front-End, Développeur Web, Scrum Master</p>
          <p className="projets-lang">HTML, CSS, Javascript, ReactJS, NodeJS, MySQL</p>
          <p className="projets-desc">En équipe de quatre développeurs, notre projet de fin de formation se résume à reprendre la mécanique des “Livres dont vous êtes le héros” (LDVELH) pour l'adapter à l’univers Web grâce à React, tout en ajoutant une dimension plus ouverte et donc polyvalente à notre version. Les choix laissés à l'utilisateur tout au long de l'histoire lui permettent de vivre une aventure originale et personnalisée.</p>
        </div>
      </div>
      <div className="projets-container-solo">
        <img src={likemovie} alt="" className="projets-image-pro" id="likemovie" />
        <div className="projets-container-solo-2">
          <h2 className="projets-title-pro"><a href="http://likemovie.baptjack.fr/" rel="noopener noreferrer" target="_blank">Likemovie</a></h2>
          <p className="projets-role">Développeur Front-End, Développeur Web, Scrum Master, référent technique</p>
          <p className="projets-lang">HTML, CSS, Javascript, ReactJS</p>
          <p className="projets-desc">En équipe de deux développeurs, nous avons voulu perfectionner notre façon de coder et pour cela, nous avons choisi un univers cinématographique ! Le moteur de recherche intégré permet de consulter un très grand nombre de films et de séries du monde entier. L'ouverture des fiches films permet, entre autre, la visualisation du réalisateur, des acteurs et de la bande annonce.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Projets;
