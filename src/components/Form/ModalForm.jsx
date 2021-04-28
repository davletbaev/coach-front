import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

import Form from './Form';

import * as styles from './Form.module.css';

const ModalForm = ({ children }) => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current?.open();
  };

  return (
    <>
      { children(openModal) }
      <Modal
        ref={ modalRef }
        label="Запись на стратегическую сессию"
      >
        <div className={ styles.modal }>
          <h3 className={ styles.modalHeading }>
              Прими решение сегодня<br />и измени свою жизнь!
          </h3>

          <Form layout="modal" />
        </div>
      </Modal>
    </>
  );
};

ModalForm.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ModalForm;