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
        <p className="footer-text">&copy; {date.getFullYear()} Baptiste Parville <sup>1.5.2</sup></p>
      </div>
    </div>
  );
};
// == Export
export default App;
