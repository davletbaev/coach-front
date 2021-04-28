import React from 'react';
import PropTypes from 'prop-types';

import Button from '~components/Button';
import { ModalForm } from '~components/Form';

import * as styles from './Coaching.module.css';

const Product = ({
  title,
  productData,
}) => (
  <>
    <div className={ styles.product }>
      <p className={ styles.productDuration }>{ productData.duration }</p>
      <h5 className={ styles.productTitle }>{ title }</h5>
      <p className={ styles.productPrice }>{ productData.price } рублей</p>

      <ModalForm>
        {
          (openModal) => (
            <Button
              variant="secondary"
              onClick={ openModal }
            >Записаться</Button>
          )
        }
      </ModalForm>
    </div>
  </>
);

Product.propTypes = {
  title: PropTypes.string.isRequired,
  productData: PropTypes.shape({
    duration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;