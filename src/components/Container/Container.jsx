import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import * as styles from './Container.module.css';

const cn = classnames.bind(styles);

const Container = ({
  id,
  className,
  type,
  children,
}) => {
  const Component = type;

  const containerClassName = cn(
    'container',
    className,
  );

  return (
    <Component
      id={ id }
      className={ containerClassName }
    >
      { children }
    </Component>
  );
};

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf([ 'header', 'footer', 'section', 'main', 'div' ]),
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  id: undefined,
  className: '',
  type: 'div',
};

export default Container;