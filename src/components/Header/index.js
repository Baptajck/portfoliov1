import React from 'react';

import './header.scss';
import couverture from './couverture.jpg';

const Header = () => (
  <div className="header">
    <img src={couverture} alt="couverture" className="header-image" />
  </div>
);

export default Header;
