import React, { useReducer, useRef } from 'react';
import classnames from 'classnames/bind';
import { Form, Formik } from 'formik';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { ENDPOINTS } from '~shared/constants';

import Button from '../Button';
import { Checkbox, Input, PhoneInput } from '../Fields';

import validationSchema from './validationSchema';

import * as styles from './Form.module.css';

const cn = classnames.bind(styles);

const INITIAL_VALUES = {
  fullName: '',
  email: '',
  phone: '',
  confirm: false,
};

const formReducer = (state, action) => {
  switch (action.status) {
    case 'idle':
      return {
        status: 'idle',
        message: null,
      };
    case 'pending':
      return {
        ...state,
        status: 'pending',
      };
    case 'success':
      return {
        ...state,
        status: 'success',
        message: action.message || 'Твоя заявка принята. Я свяжусь с тобой в ближайшее время',
      };
    case 'error':
      return {
        ...state,
        status: 'error',
        message: action.message || 'Произошла ошибка',
      };
    default:
      return state;
  }
};

const FormComponent = ({
  layout,
  initialValues,
  onSubmit,
}) => {
  const formRef = useRef();

  const [ formState, updateFormState ] = useReducer(
    formReducer,
    {
      status: 'idle',
      message: null,
    },
  );

  const handleSubmit = async () => {
    updateFormState({ status: 'pending' });

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch(ENDPOINTS.form, {
        method: 'POST',
        body: formData,
      });

      const {
        status,
        message,
      } = await res.json();

      updateFormState({
        status: status === 'mail_sent' ? 'success' : status,
        message,
      });

      onSubmit && onSubmit();
    } catch (e) {
      updateFormState({
        status: 'error',
        message: e.message,
      });
    }
  };

  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ handleSubmit }
      validationSchema={ validationSchema }
    >
      <Form
        ref={ formRef }
        className={ cn('form', `${ layout }Layout`) }
      >
        <div className={ styles.group }>
          <Input
            name="fullName"
            type="text"
            placeholder="Имя"
          />
        </div>
        <div className={ styles.group }>
          <Input
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className={ styles.group }>
          <PhoneInput
            name="phone"
            type="tel"
            placeholder="Номер телефона"
            caption="Оставь номер телефона, если хочешь, чтобы тебе позвонили"
          />
        </div>
        <div className={ styles.group }>
          <Checkbox name="confirm">
              Я принимаю условия
            <Link to="/privacy-policy">Политики Конфиденциальности</Link>
          </Checkbox>
        </div>

        <Button
          className={ styles.button }
          type="submit"
          disabled={ formState.status === 'success' || formState.status === 'pending' }
        >Записаться</Button>

        {
          formState.status === 'success' && (
            <div className={ styles.successResponse }>
              { formState.message }
            </div>
          )
        }
        {
          formState.status === 'error' && (
            <div className={ styles.errorResponse }>
              { formState.message }
            </div>
          )
        }
      </Form>
    </Formik>
  );
};

FormComponent.propTypes = {
  layout: PropTypes.oneOf([ 'inline', 'modal' ]),
  initialValues: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    confirm: PropTypes.bool.isRequired,
  }),
  onSubmit: PropTypes.func,
};

FormComponent.defaultProps = {
  layout: 'inline',
  initialValues: INITIAL_VALUES,
  onSubmit: null,
};

export default FormComponent;