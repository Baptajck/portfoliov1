// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';
import Home from 'src/components/Home';
// import Attente from 'src/components/Attente';

// == Composant
const App = () => (
  <div id="app">
    <Switch>
      <Route>
        <Home exact path="/portfolio" />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
