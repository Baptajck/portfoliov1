import React from 'react';

import './projets.scss';
import gamebook800 from './images/gamebook_800w.jpg';
import gamebook1600 from './images/gamebook_1600w.jpg';
import gamebook3200 from './images/gamebook_3200w.jpg';

import likemovie800 from './images/likemovie_800w.jpg';
import likemovie1600 from './images/likemovie_1600w.jpg';
import likemovie3200 from './images/likemovie_3200w.jpg';

import space800 from './images/space_800w.jpg';
import space1600 from './images/space_1600w.jpg';
import space3200 from './images/space_3200w.jpg';

import becomepote800 from './images/becomepote800.jpg';
import becomepote1600 from './images/becomepote1600.jpg';
import becomepote3200 from './images/becomepote3200.jpg';

import movierunner800 from './images/movierunner800.jpg';
import movierunner1600 from './images/movierunner1600.jpg';
import movierunner3200 from './images/movierunner3200.jpg';

const Projets = () => (
  <div className="projets" id="projets">
    <h1 className="projets-title">Projets</h1>
    <hr className="projets-hr" />
    <p className="projets-subtitle-1">Développement Web Responsive - Mobile First</p>
    <p className="projets-subtitle-2">Compatible mobiles, tablettes et PC</p>
    <div className="projets-container">
      <div className="projets-container-solo" id="gamebook">
		<picture>
		  <source type="image/jpg" media="(max-width: 500px)" srcSet={`${gamebook800} 1x`} />
		  <img className="projets-image-pro" srcSet={`${gamebook3200} 3200w, ${gamebook1600} 1600w`} src={gamebook1600} alt="gamebook" />
		</picture>
        {/* <img src={gamebook} alt="gamebook" className="projets-image-pro" id="gamebook" /> */}
        <div className="projets-container-solo-2">
          <h2 className="projets-title-pro"><a href="http://gamebook.tech/" rel="noopener noreferrer" target="_blank">Gamebook</a></h2>
          <p className="projets-role">Développeur Front-End, Développeur Web, Scrum Master</p>
          <p className="projets-lang">HTML, CSS, Javascript, ReactJS, NodeJS, MySQL</p>
          <p className="projets-desc">En équipe de quatre développeurs, notre projet de fin de formation se résume à reprendre la mécanique des “Livres dont vous êtes le héros” (LDVELH) pour l'adapter à l’univers Web grâce à React, tout en ajoutant une dimension plus ouverte et donc polyvalente à notre version. Les choix laissés à l'utilisateur tout au long de l'histoire lui permettent de vivre une aventure originale et personnalisée.</p>
          <div className="projets-groupLink">
            <a href="https://gamebook-app.netlify.app/" className="projets-groupLink-item">Site</a>
            <a href="https://github.com/Baptajck/GameBook" className="projets-groupLink-item">Code</a>
          </div>
        </div>
      </div>

      <div className="projets-container-solo" id="likemovie">
        <picture>
          <source type="image/jpg" media="(max-width: 500px)" srcSet={`${likemovie800} 1x`} />
          <img className="projets-image-pro" srcSet={`${likemovie3200} 3200w, ${likemovie1600} 1600w`} src={likemovie1600} alt="likemovie" />
        </picture>
        {/* <img src={likemovie} alt="likemovie" className="projets-image-pro" id="likemovie" /> */}
        <div className="projets-container-solo-2">
          <h2 className="projets-title-pro"><a href="http://likemovie.baptjack.fr/" rel="noopener noreferrer" target="_blank">Likemovie</a></h2>
          <p className="projets-role">Développeur Front-End, Développeur Web, Scrum Master, référent technique</p>
          <p className="projets-lang">HTML, CSS, Javascript, ReactJS</p>
          <p className="projets-desc">En équipe de deux développeurs, nous avons voulu perfectionner notre façon de coder et pour cela, nous avons choisi un univers cinématographique ! Le moteur de recherche intégré permet de consulter un très grand nombre de films et de séries du monde entier. L'ouverture des fiches films permet, entre autre, la visualisation du réalisateur, des acteurs et de la bande annonce.</p>
          <div className="projets-groupLink">
            <a href="http://likemovie.baptjack.fr" className="projets-groupLink-item">Site</a>
            <a href="https://github.com/Baptajck/likemovie" className="projets-groupLink-item">Code</a>
          </div>
        </div>
      </div>

      <div className="projets-container-solo" id="space">
        <picture>
          <source type="image/jpg" media="(max-width: 500px)" srcSet={`${space800} 1x`} />
          <img className="projets-image-pro" srcSet={`${space3200} 3200w, ${space1600} 1600w`} src={space1600} alt="space" />
        </picture>
        <div className="projets-container-solo-2">
          <h2 className="projets-title-pro"><a href="http://space.baptjack.fr/" rel="noopener noreferrer" target="_blank">Space</a></h2>
          <p className="projets-role">Développeur Front-End</p>
          <p className="projets-lang">CSS, Javascript, ReactJS</p>
          <p className="projets-desc">Pour mon premier projet solo, j'ai voulu lier hobby et code dans une petite application regroupant les dernières infos importantes de Space X. Liée à la base de données de la compagnie, l'application (en anglais) vous informe notamment des missions à venir et vous fournit quelques données sur les capsules utilisées, par exemple, lors des vols à destination de la Station Internationale (ISS). </p>
          <div className="projets-groupLink">
            <a href="http://space.baptjack.fr" className="projets-groupLink-item">Site</a>
            <a href="https://github.com/Baptajck/space" className="projets-groupLink-item">Code</a>
          </div>
        </div>
      </div>

      <div className="projets-container-solo projets-container-solo--becomepote" id="becomepote">
        <picture>
          <source type="image/jpg" media="(max-width: 500px)" srcSet={`${becomepote800} 1x`} />
          <img className="projets-image-pro projets-image-pro--becomepote" srcSet={`${becomepote3200} 3200w, ${becomepote1600} 1600w`} src={becomepote1600} alt="becomepote" />
        </picture>
        <div className="projets-container-solo-2">
          <p className="projets-container-solo-2--upcoming">Projet en construction</p>
          <h2 className="projets-title-pro"><a href="http://becomepote.fr/" rel="noopener noreferrer" target="_blank">Becomepote</a></h2>
          <p className="projets-role">Développeur Fullstack</p>
          <p className="projets-lang">CSS, Javascript, ReactJS, NodeJS, Express, Knex</p>
          <p className="projets-desc">A la vue de la recrudescence des applications de rencontres mais à caractère romantique, il nous semblait important de proposer une application pour faire des rencontres amicales. Application qui pourrait se révéler utile lors d’un déménagement dans une nouvelle ville, par exemple. Il n’est pas aisé de construire un cercle social d’amis hors du travail, c’est là que notre application, BeComePote, interviendrait.</p>
          <div className="projets-groupLink">
            <a href="http://becomepote.fr" className="projets-groupLink-item">Site</a>
            <a href="https://github.com/Baptajck/BeComePote" className="projets-groupLink-item">Code</a>
          </div>
        </div>
      </div>

      <div className="projets-container-solo" id="movierunner">
        <picture>
          <source type="image/jpg" media="(max-width: 500px)" srcSet={`${movierunner800} 1x`} />
          <img className="projets-image-pro" srcSet={`${movierunner3200} 3200w, ${movierunner1600} 1600w`} src={movierunner1600} alt="movierunner" />
        </picture>
        <div className="projets-container-solo-2">
          <p className="projets-container-solo-2--upcoming">Projet en construction</p>
          <h2 className="projets-title-pro"><a href="http://movierunner.baptjack.fr/" rel="noopener noreferrer" target="_blank">Movie Runner</a></h2>
          <p className="projets-role">Développeur Fullstack</p>
          <p className="projets-lang">CSS, Javascript, ReactJS</p>
          <p className="projets-desc">Refonte du site <a href="http://likemovie.baptjack.fr">Likemovie</a>.</p>
          <div className="projets-groupLink">
            <a href="http://movierunner.baptjack.fr" className="projets-groupLink-item">Site</a>
            <a href="https://github.com/Baptajck/movierunner" className="projets-groupLink-item">Code</a>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Projets;
