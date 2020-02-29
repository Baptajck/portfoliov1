import React from 'react';

import './presentation.scss';
import pictureTop from './photo_presentation_2.jpg';

const Presentation = () => (
  <div className="presentation">
    <img src={pictureTop} alt="Photo_du_haut" className="presentation-picture" />
    <h1 className="presentation-title">
        A propos
      <hr className="presentation-hr" />
    </h1>
    <div className="presentation-header">
      <p className="presentation-desc">
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Molestias fugit doloribus
        dolorum sunt aut facere quo nam voluptatem vel odit
        illum aliquid, quae laudantium, a ullam nobis expedita!
        Doloremque, officiis!
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Molestias fugit doloribus
        dolorum sunt aut facere quo nam voluptatem vel odit
        illum aliquid, quae laudantium, a ullam nobis expedita!
        Doloremque, officiis!
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

export default Presentation;
