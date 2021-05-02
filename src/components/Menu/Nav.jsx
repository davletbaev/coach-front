import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Menu.module.css';

const Nav = ({ onNavigate }) => {
  const navigate = (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').slice(1);

    const target = document.getElementById(targetId);

    typeof window !== 'undefined' && window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });

    onNavigate();
  };

  return (
    <ul
      className={ styles.nav }
    >
      <li className={ styles.navItem }>
        <a
          href="#about"
          className={ styles.navLink }
          onClick={ navigate }
        >Обо мне</a>
      </li>
      <li className={ styles.navItem }>
        <a
          href="#reviews"
          className={ styles.navLink }
          onClick={ navigate }
        >Отзывы</a>
      </li>
      <li className={ styles.navItem }>
        <a
          href="#coaching"
          className={ styles.navLink }
          onClick={ navigate }
        >Коучинг</a>
      </li>
    </ul>
  );
};

Nav.propTypes = {
  onNavigate: PropTypes.func,
};

Nav.defaultProps = {
  onNavigate: () => {
  },
};

export default Nav;