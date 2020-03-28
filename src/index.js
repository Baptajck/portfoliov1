// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Favicon from 'react-favicon';

// == Import : local
import App from 'src/components/App';

// == Render
const rootComponent = (
  <Router>
    <Favicon url="https://i.imgur.com/cLUxH7U.png" />
    <App />
  </Router>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
