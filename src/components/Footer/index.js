// == Import : npm
import React from 'react';

// == Import : local
import './footer.scss';

// == Composant
const App = () => {
  const date = new Date();
  return (
    <div className="footer">
      <p className="footer-text">&copy; {date.getFullYear()} Baptiste Parville <sup>1.0.0</sup></p>
    </div>
  );
};
// == Export
export default App;
