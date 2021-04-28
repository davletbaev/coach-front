import React, { useRef } from 'react';
import { useField } from 'formik';
import IMask from 'imask';
import PropTypes from 'prop-types';

import * as styles from './Fields.module.css';

const phoneMask = IMask.createMask({
  mask: [
    { mask: '+7 (000) 000 00 00' },
    { mask: '8 (000) 000 00 00' },
  ],
  dispatch: (appended, dynamicMasked) => {
    const value = dynamicMasked.value + appended;

    if (value.match(/^8/)) {
      return dynamicMasked.compiledMasks[1];
    }

    return dynamicMasked.compiledMasks[0];
  },
});

const PhoneInput = ({
  caption,
  ...props
}) => {
  const inputRef = useRef();

  const [
    {
      onChange,
      ...field
    }, meta,
  ] = useField(props);

  const handleChange = (e) => {
    e.target.value = phoneMask.resolve(e.target.value);

    onChange(e);
  };

  return (
    <div className={ styles.field }>
      <input
        ref={ inputRef }
        className={ styles[meta.touched && meta.error ? 'inputError' : 'input'] }
        onChange={ handleChange }
        { ...field }
        { ...props } />
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
}
;

PhoneInput.propTypes = {
  caption: PropTypes.string,
};

PhoneInput.defaultProps = {
  caption: null,
};

export default PhoneInput;