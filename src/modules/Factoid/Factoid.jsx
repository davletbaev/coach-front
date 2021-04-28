import React from 'react';

import Container from '~components/Container';

import * as styles from './Factoid.module.css';

const Factoid = () => (
  <section className={ styles.factoid }>
    <Container className={ styles.container }>
      <strong className={ styles.content }>
        <p>Обучение с Ириной Вяткиной <i>—</i></p>
        <p>это авторский синтез эриксоновского коучинга</p>
        <p>с современной психологией</p>
        <p>и нейробиологией</p>
      </strong>
    </Container>
  </section>
);

export default Factoid;