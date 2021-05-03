import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '~components/Button';
import Container from '~components/Container';
import { ModalForm } from '~components/Form';

import * as styles from './Decision.module.css';

const Decision = () => (
  <Container
    type="section"
    className={ styles.decision }
  >
    <h2 className={ styles.heading }>Прими решение<br /> и измени свою жизнь!</h2>

    <StaticImage
      className={ styles.picture }
      quality="90"
      layout="constrained"
      transformOptions={
        {
          cropFocus: 'center',
        }
      }
      src="./decision.jpg"
      formats={ [ 'auto', 'webp', 'avif' ] }
      placeholder="blurred"
      alt=""
    />

    <p className={ styles.caption }>Я — тот, кто тебе нужен, если</p>

    <div className={ styles.right }>
      <ul>
        <li>Ты уперся в финансовый полоток<br />или работаешь в ноль</li>
        <li>Времени не хватает ни на что</li>
        <li>Работа потеряла смысл</li>
        <li>Личная жизнь принесена в жертву бизнесу</li>
        <li>Энергия на нуле и ничто не зажигает</li>
      </ul>

      <ModalForm>
        {
          (openModal) => (
            <Button
              onClick={ openModal }
            >Записаться на стратегическую сессию</Button>
          )
        }
      </ModalForm>
    </div>
  </Container>
);

export default Decision;