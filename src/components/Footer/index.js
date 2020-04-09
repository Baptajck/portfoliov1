// == Import : npm
import React from 'react';
import ButtonScrollToTop from 'src/components/utils/ButtonScrollToTop';

// == Import : local
import './footer.scss';

// == Composant
const App = () => {
  const date = new Date();

  return (
    <div>
      <ButtonScrollToTop />
      <div className="footer">
        <p className="footer-text">&copy; {date.getFullYear()} Baptiste Parville <sup>2.0.0</sup></p>
      </div>
    </div>
  );
};
// == Export
export default App;
