import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import * as styles from './Menu.module.css';

const Toggle = ({
  isOpen,
  onClick,
}) => (
  <button
    className={ styles.toggle }
    type="button"
    aria-expanded={ isOpen }
    aria-controls="menu__wrapper"
    onClick={ onClick }
  >
    <Icon
      className={ styles.toggleIcon }
      width="32"
      height="32"
      icon={ isOpen ? 'cross' : 'menu' }
    />
  </button>
);

Toggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toggle;