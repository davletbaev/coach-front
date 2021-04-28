import React, { useState } from 'react';

import Socials from '../Socials';

import Nav from './Nav';
import Toggle from './Toggle';

import * as styles from './Menu.module.css';

const Menu = () => {
  const [ isOpen, setOpen ] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

  return (
    <nav className={ styles.menu }>
      <Toggle
        onClick={ toggleMenu }
        isOpen={ isOpen }
      />

      <div
        className={ styles[isOpen ? 'wrapperOpen' : 'wrapper'] }
        id="menu__wrapper"
      >
        <Nav />

        <Socials />
      </div>
    </nav>
  );
};

Menu.propTypes = {};

export default Menu;