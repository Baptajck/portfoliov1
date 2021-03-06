import React from 'react';

import Skills from 'src/components/Skills';
import './presentation.scss';
import pictureTop from './couverture_2.png';

const Presentation = () => (
  <div className="presentation" id="presentation">
    <h1 className="presentation-title">
          A propos
      <hr className="presentation-hr" />
    </h1>
    <div className="presentation-header">
      <div className="presentation-header-cont">
        <div className="presentation-header-group">
          <img src={pictureTop} alt="Photo_de_profil" className="presentation-picture" />
          <p className="presentation-header-p"><a href="https://drive.google.com/file/d/1wAWFTyptRx57E9fn7JDPPSnw_TE5mzda/view?usp=sharing" className="presentation-header-link"><button type="button" className="presentation-header-btn">Voir mon CV !</button></a></p>
        </div>
        <p className="presentation-desc">
            Je m'appelle Baptiste Parville et ma passion pour le développement web commence un peu par hasard après quelques cours pris sur OpenClassrooms. Fort de cette découverte, je décide de changer de cap et de me lancer pleinement dans le développement web. Après 4 mois de formation intensive chez O'Clock, qui m'ont conforté dans mon idée, je me lance avec 3 de mes collègues dans un projet se voulant novateur et inédit : <a href="#gamebook" className="underline">GameBook</a>.
            A la fin de la formation, j'ai souhaité mettre mes compétences fraîchement acquises en action et c'est ainsi qu'est né : <a href="#likemovie" className="underline">LikeMovie</a>.
            Je cherche désormais à mettre mes compétences au service de votre entreprise.
        </p>
      </div>
      <Skills />
    </div>
  </div>
);
export default Presentation;
