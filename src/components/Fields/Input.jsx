import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import * as styles from './Fields.module.css';

const Input = ({
  caption,
  ...props
}) => {
  const [ field, meta ] = useField(props);

  return (
    <div className={ styles.field }>
      <input
        className={ styles[meta.touched && meta.error ? 'inputError' : 'input'] }
        { ...field }
        { ...props }
      />
      {
        meta.touched && meta.error && (
          <div className={ styles.error }>{ meta.error }</div>
        )
      }
      {
        caption && !meta.error && (
          <div className={ styles.caption }>{ caption }</div>
        )
      }
    </div>
  );
};

Input.propTypes = {
  caption: PropTypes.string,
};

Input.defaultProps = {
  caption: null,
};

export default Input;