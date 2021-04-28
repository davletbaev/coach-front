import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '~components/Container';

import * as styles from './About.module.css';

const About = () => (
  <Container
    id="about"
    type="section"
    className={ styles.about }
  >
    <div className={ styles.headline }>
      <StaticImage
        className={ styles.picture }
        quality="90"
        layout="constrained"
        src="./about.jpg"
        formats={ [ 'auto', 'webp', 'avif' ] }
        placeholder="blurred"
        alt=""
      />

      <h2 className={ styles.heading }>Обо мне</h2>
    </div>

    <div className={ styles.content }>
      <p>8 лет на телевидении: новости, прямые трансляции, тематические программы.</p>
      <p>2 небольших бизнеса: частная практика и картины на заказ.</p>
      <p>Инвестирую в фондовые рынки США.</p>
      <p>Участвовала в выборах в депутаты Государственной думы и Законодательного собрания Красноярского края в 2016
          году.
      </p>
      <p>Играла в опере «Анна Каренина» на сцене Мюзик-Холла в 2017 году.</p>
      <p>Веду вебинары, мастер-классы и семинары по психологии отношений, психологии предпринимательства и
          тайм-менеджменту.
      </p>
    </div>
  </Container>
);

export default About;