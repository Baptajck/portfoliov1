import React from 'react';

import './home.scss';
// import Navigation from 'src/components/Navigation';
import Header from 'src/components/Header';
import Presentation from 'src/components/Presentation';
import Formation from 'src/components/Formation';
import Projets from 'src/components/Projets';
import Contact from 'src/components/Contact';

const Home = () => (
  <div>
    {/* <Navigation /> */}
    <Header />
    <Presentation />
    <Formation />
    <Projets />
    <Contact />
  </div>
);

export default Home;
