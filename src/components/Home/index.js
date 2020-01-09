import React from 'react';

import './home.scss';
import Navigation from 'src/components/Navigation';
import Header from 'src/components/Header';
import Presentation from 'src/components/Presentation';

const Home = () => (
  <div>
    <Navigation />
    <Header />
    <Presentation />
  </div>
);

export default Home;
