import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import sprite from '~assets/images/sprite.svg';

import * as styles from './Icon.module.css';

const cn = classnames.bind(styles);

const Icon = ({
  width,
  height,
  className,
  icon,
}) => (
  <svg
    width={ width }
    height={ height }
    className={ cn('icon', className) }
  >
    <use href={ `${ sprite }#${ icon }` } />
  </svg>
);

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.oneOf([
    'logo',
    'stock',
    'timing',
    'yinyang',
    'startup',
    'expert',
    'group',
    'growth',
    'smile',
    'medicine',
    'result',
    'facebook',
    'vk',
    'instagram',
    'arrow',
    'play',
    'menu',
    'cross',
    'box',
    'box-checked',
  ]).isRequired,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;