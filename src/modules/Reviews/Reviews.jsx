import React from 'react';
import PropTypes from 'prop-types';

import Container from '~components/Container';
import Icon from '~components/Icon';

import SingleReview from './SingleReview';
import useCarousel from './useCarousel';

import * as styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  const {
    prevBtnProps,
    nextBtnProps,
    slideProps,
    carouselRef,
  } = useCarousel();

  const renderSlides = reviews.map((item) => <SingleReview key={ item.id } { ...item } { ...slideProps } />);

  return (
    <section
      id="reviews"
      className={ styles.overflowWrapper }
    >

      <Container
        className={ styles.reviews }
      >
        <h2 className={ styles.heading }>Отзывы</h2>

        <div className={ styles.nav }>
          <button
            type="button"
            className={ styles.navButton }
            { ...prevBtnProps }
          >
            <Icon
              width="48"
              height="48"
              className={ styles.iconPrev }
              icon="arrow"
            />
          </button>
          <button
            type="button"
            className={ styles.navButton }
            { ...nextBtnProps }
          >
            <Icon
              width="48"
              height="48"
              className={ styles.iconNext }
              icon="arrow"
            />
          </button>
        </div>

        <div
          ref={ carouselRef }
          className={ styles.embla }
        >
          <div className={ styles.emblaContainer }>
            { renderSlides }
          </div>
        </div>
      </Container>
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    reviewData: PropTypes.shape({
      description: PropTypes.string.isRequired,
      video: PropTypes.string,
      // eslint-disable-next-line react/forbid-prop-types
      photo: PropTypes.object,
    }).isRequired,
  })).isRequired,
};

export default Reviews;