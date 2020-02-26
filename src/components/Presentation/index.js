import React from 'react';

import './presentation.scss';
import pictureTop from './photo_presentation.jpg';

const Presentation = () => (
  <div className="presentation" id="presentation">
    <img src={pictureTop} alt="Photo_du_haut" className="presentation-picture" />
    <h1 className="presentation-title">
      A propos
      <hr className="presentation-hr" />
    </h1>
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
);

export default Presentation;
