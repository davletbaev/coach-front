import React, { useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import 'dialog-polyfill/dialog-polyfill.css';

import * as styles from './Modal.module.css';

const Modal = React.forwardRef(({
  id,
  label,
  onOpen,
  onClose,
  children,
}, ref) => {
  const dialogRef = useRef();
  const [ isOpen, setOpen ] = useState(false);

  const open = () => {
    setOpen(true);

    if (typeof window !== 'undefined') {
      import('dialog-polyfill').then((dialogPolyfill) => {
        dialogPolyfill.default.registerDialog(dialogRef.current);
        dialogRef.current.showModal();
      });
    }

    typeof onOpen === 'function' && onOpen();
  };

  const close = () => {
    dialogRef.current.close();

    setOpen(false);

    typeof onClose === 'function' && onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target !== dialogRef.current) return;

    close();
  };

  useImperativeHandle(ref, () => ({
    isOpen,
    open,
    close,
  }));

  const dialog = (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      id={ id }
      className={ styles.modal }
      ref={ dialogRef }
      aria-label={ label }
      onClick={ handleBackdropClick }
    >
      <button
        type="button"
        className={ styles.cross }
        onClick={ close }
      >
        <Icon
          className={ styles.icon }
          width="32"
          height="32"
          icon="cross"
        />
      </button>
      { children }
    </dialog>
  );

  return isOpen ? createPortal(dialog, document.body) : null;
});

Modal.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  id: undefined,
  onOpen: null,
  onClose: null,
  label: '',
};

export default Modal;