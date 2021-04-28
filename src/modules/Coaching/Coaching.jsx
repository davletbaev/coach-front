import React, { Fragment } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Container from '~components/Container';

import Product from './Product';

import * as styles from './Coaching.module.css';

const Coaching = ({ products }) => {
  const renderProducts = products.map((item) => (
    <Fragment key={ item.id }>
      <li className={ styles.tariffsItem }>
        <Product{ ...item } />
      </li>
      <div className={ styles.tariffsDivider } />
    </Fragment>
  ));


  return (
    <Container
      id="coaching"
      type="section"
      className={ styles.coaching }
    >
      <StaticImage
        className={ styles.picture }
        quality="90"
        layout="constrained"
        src="./coaching.jpg"
        formats={ [ 'auto', 'webp', 'avif' ] }
        placeholder="blurred"
        alt=""
      />

      <h2 className={ styles.heading }>Личный коучинг</h2>

      <dl className={ styles.advantages }>
        <div className={ styles.advantagesItem }>
          <dt className={ styles.advantageTitle }>Индивидуальная работа над твоей целью</dt>
          <dd className={ styles.advantageDescription }>Мы замеряем точку старта и финиша, чтобы ты реально оценил тот
              прогресс, который случился с тобой во время
              коучинга
          </dd>
        </div>

        <div className={ styles.advantagesItem }>
          <dt className={ styles.advantageTitle }>Экономия до 100% на психологическом консультировании</dt>
          <dd className={ styles.advantageDescription }>1 специалист вместо 2х. Мы не только идём к твоей цели, но и
              прорабатываем на психологической терапии все
              блоки и страхи, которые мешают тебе её получить прямо сейчас
          </dd>
        </div>

        <div className={ styles.advantagesItem }>
          <dt className={ styles.advantageTitle }>Проактивная позиция, которая останется с тобой на всю жизнь</dt>
          <dd className={ styles.advantageDescription }>Я не только учу эффективных стратегиям, но и помогаю внедрить
              их
              в твою жизнь без сопротивления и откатов
          </dd>
        </div>
      </dl>

      <ul className={ styles.tariffs }>
        { renderProducts }
      </ul>
    </Container>
  );
};

Coaching.propTypes =
    {
      products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        productData: PropTypes.shape({
          duration: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        }).isRequired,
      })).isRequired,
    };

export default Coaching;