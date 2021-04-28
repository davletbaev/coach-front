import React from 'react';

import * as styles from './Menu.module.css';

const Nav = () => {
  const navigate = (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').slice(1);

    console.log(targetId);

    const target = document.getElementById(targetId);

    console.log(target);

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
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

export default Nav;