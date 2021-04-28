import React, { useRef } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Icon from '~components/Icon';
import Modal from '~components/Modal';

import * as styles from './Reviews.module.css';

const SingleReview = ({
  title,
  reviewData,
  onClick,
}) => {
  const modalRef = useRef();

  const image = getImage(reviewData.photo.localFile);

  const openModal = () => {
    onClick?.() && modalRef.current?.open();
  };

  return (
    <>
      <div
        className={ styles.review }
        onClick={ openModal }
        tabIndex="0"
        role="button"
        aria-controls="modal"
      >
        <h5 className={ styles.reviewName }>{ title }</h5>
        <p className={ styles.reviewDescription }>{ reviewData.description }</p>
        <GatsbyImage
          className={ styles.reviewPhoto }
          alt="Отзыв клиента"
          image={ image }
          loading="lazy"
        />
        {
          reviewData.video && (
            <div className={ styles.videoMark }>
              <Icon
                icon="play"
                height="24"
                width="24"
              />
            </div>
          )
        }
      </div>
      <Modal
        id="modal"
        ref={ modalRef }
        label="Отзыв клиента"
      >
        <figure className={ styles.lightbox }>
          {
            reviewData.video ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
              <video
                src={ reviewData.video }
                preload="auto"
                width="480"
                height="480"
                controls
              />
            ) : (
              <GatsbyImage
                alt="Отзыв клиента"
                image={ image }
              />
            )
          }
          <figcaption className={ styles.lightboxCaption }>
            <h5 className={ styles.lightboxName }>{ title }</h5>
            <p className={ styles.lightboxDescription }>{ reviewData.description }</p>
          </figcaption>
        </figure>
      </Modal>
    </>
  );
}
;

SingleReview.propTypes = {
  title: PropTypes.string.isRequired,
  reviewData:
  PropTypes.shape({
    description: PropTypes.string.isRequired,
    video: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    photo: PropTypes.object,
  }).isRequired,
  onClick: PropTypes.func,
};

SingleReview.defaultProps = {
  onClick: null,
};

export default SingleReview;