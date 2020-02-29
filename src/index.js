// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import : local
import App from 'src/components/App';

// == Render
const rootComponent = (
  <Router>
    <App />
  </Router>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
