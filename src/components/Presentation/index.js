import React from 'react';

import './presentation.scss';
import pictureTop from './photo_presentation_2.jpg';

const Presentation = () => {
  // const scrollToGamebook = () => {
  //   window.scrollTo(2408.86669921875, 2408.86669921875);
  // };
  // const scrollToLikemovie = () => {
  //   window.scrollTo(2974.36669921875, 2974.36669921875);
  // };
  return (
    <div className="presentation">
      <img src={pictureTop} alt="Photo_du_haut" className="presentation-picture"/>
      <h1 className="presentation-title">
          A propos
        <hr className="presentation-hr" />
      </h1>
      <div className="presentation-header">
        <p className="presentation-desc">
          Je m'appelle Baptiste Parville et ma passion pour le développement web commence un peu par hasard après quelques cours pris sur OpenClassrooms. Fort de cette découverte, je décide de changer de cap et de me lancer pleinement dans le développement web. Après 4 mois de formation intensive chez O'Clock, qui m'ont conforté dans mon idée, je me lance avec 3 de mes collègues dans un projet se voulant novateur et inédit : <a href="#gamebook" className="underline">GameBook</a>.
          A la fin de la formation, j'ai souhaité mettre mes compétences fraîchement acquises en action et c'est ainsi qu'est né : <a href="#likemovie" className="underline">LikeMovie</a>.
          Je cherche désormais à mettre mes compétences au service de votre entreprise.
        </p>
        <h1 className="presentation-title-c">
          Mes compétences
          <hr className="presentation-hr-c" />
        </h1>
        <div className="presentation-group">
          <div className="presentation-circle">HTML / CSS</div>
          <div className="presentation-circle">Javascript</div>
          <div className="presentation-circle">ReactJS</div>
          <div className="presentation-circle">Redux</div>
          <div className="presentation-circle">NodeJS</div>
          <div className="presentation-circle">PHP</div>
          <div className="presentation-circle">Lumen</div>
          <div className="presentation-circle">GIT</div>
        </div>
      </div>
    </div>
  );
};
export default Presentation;
