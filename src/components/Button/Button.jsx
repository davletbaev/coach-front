/* eslint-disable react/button-has-type */
import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import sprite from '~assets/images/sprite.svg';

import * as styles from './Button.module.css';

const cn = classnames.bind(styles);

const Button = ({
  className,
  type,
  variant,
  disabled,
  onClick,
  children,
}) => {
  const buttonClassName = cn(
    'button',
    variant,
    className,
  );

  return (
    <button
      className={ buttonClassName }
      type={ type || 'button' }
      disabled={ disabled }
      onClick={ onClick }
    >
      <span className={ styles.inner }>
        { children }
      </span>
      {
        variant === 'secondary' && (
          <svg className={ styles.icon }>
            <use href={ `${ sprite }#arrow` } />
          </svg>
        )
      }
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([ 'button', 'submit' ]),
  variant: PropTypes.oneOf([ 'primary', 'secondary' ]),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  variant: 'primary',
  disabled: undefined,
};

export default Button;