import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '~components/Container';
import Form from '~components/Form';

import * as styles from './LeadForm.module.css';

const LeadForm = () => (
  <section className={ styles.leadForm }>
    <Container className={ styles.container }>
      <div className={ styles.content }>
        <h2>Прими решение сегодня <br />и измени свою жизнь!</h2>

        <p>Запишись на бесплатную стратегическую сессию прямо сейчас!</p>
        <p>При оплате коучинга в день стратегической сессии ты получишь в подарок вебинар «Тайм-Менеджмент по уму»</p>

        <div className={ styles.form }>
          <Form />
        </div>
      </div>

      <div className={ styles.picture }>
        <div className={ styles.pictureWrapper }>
          <StaticImage
            className={ styles.pictureImage }
            quality="90"
            layout="constrained"
            src="./lead_form.jpg"
            formats={ [ 'auto', 'webp', 'avif' ] }
            placeholder="blurred"

            transformOptions={
              {
                cropFocus: 'top',
              }
            }
            alt=""
          />
        </div>
      </div>
    </Container>
  </section>
);

export default LeadForm;