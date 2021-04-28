import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import * as styles from './Fields.module.css';

const Checkbox = ({
  children,
  ...props
}) => {
  const [ field, meta ] = useField({ type: 'checkbox', ...props });

  return (
    <div className={ styles.field }>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label className={ styles[meta.touched && meta.error ? 'labelError' : 'label'] }>
        <input
          type="checkbox"
          className={ styles.checkbox }
          { ...field }
          { ...props }
        />
        <Icon
          className={ styles.icon }
          icon={ field.value ? 'box-checked' : 'box' }
          height="32"
          width="32"
        />
        <span className={ styles.text }>{ children }</span>

        {
          meta.touched && meta.error && (
            <div className={ styles.checkboxError }>{ meta.error }</div>
          )
        }
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Checkbox;