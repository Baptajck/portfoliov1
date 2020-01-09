import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

import './navigation.scss';

const Navigation = () => {
  const [state, setState] = useState(true);

  function toggle() {
    setState(!state);
  }

  return (
    <div className="navigation">
      <h1 className="navigation-title">Portfolio</h1>
      <div onClick={toggle} className="animated">
        {state ? <GiHamburgerMenu className="navigation-hamburger" /> : (
          <>
            <IoMdClose className="navigation-hamburger" />
            <div>
              <ul className="navigation-liste">
                <li className="navigation-liste-item"><a className="navigation-liste-item-link" href="http://gamebook.tech">Présentation</a></li>
                <li className="navigation-liste-item"><a className="navigation-liste-item-link" href="#">Formation</a></li>
                <li className="navigation-liste-item"><a className="navigation-liste-item-link" href="#">Projets</a></li>
                <li className="navigation-liste-item"><a className="navigation-liste-item-link" href="#">Contact</a></li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
