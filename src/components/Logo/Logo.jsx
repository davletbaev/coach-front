import React from 'react';

import Icon from '../Icon';

import * as styles from './Logo.module.css';

const Logo = () => (
  <a
    href="/"
    className={ styles.logo }
  >
    <span className="visually-hidden">Ирина Вяткина</span>
    <Icon
      width="200"
      height="24"
      className={ styles.image }
      icon="logo"
    />
  </a>
);

export default Logo;