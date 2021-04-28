import React from 'react';

import Container from '~components/Container';

import * as styles from './Session.module.css';

const Session = () => (
  <Container
    type="section"
    className={ styles.session }
  >
    <h3 className={ styles.heading }>На бесплатной<br /> стратегической сессии мы:</h3>

    <ol className={ styles.list }>
      <li className={ styles.item }>Проведем анализ твоей текущей ситуации</li>
      <li className={ styles.item }>Правильно поставим цели</li>
      <li className={ styles.item }>Определим ведущие векторы роста</li>
      <li className={ styles.item }>Разработаем план-стратегию движения к цели</li>
      <li className={ styles.item }>Зарядим тебя энергией и вдохновением</li>
    </ol>
  </Container>
);

export default Session;