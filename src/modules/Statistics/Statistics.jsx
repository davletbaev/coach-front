import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '~components/Button';
import Container from '~components/Container';

import { ModalForm } from '../../components/Form';

import * as styles from './Statistics.module.css';

const Statistics = () => (
  <Container
    type="section"
    className={ styles.statistics }
  >
    <h2 className="visually-hidden">Статистика</h2>

    <ul className={ styles.factsList }>
      <li className={ styles.fact }>
        <p className={ styles.factNum }>1/30</p>
        <p className={ styles.factLabel }>Шансы самостоятельно<br />преуспеть в бизнесе<br />в России</p>
      </li>

      <li className={ styles.fact }>
        <p className={ styles.factNum }>90%</p>
        <p className={ styles.factLabel }>предприятий малого бизнеса закрывается в течение<br />первого года</p>
      </li>

      <li className={ styles.fact }>
        <p className={ styles.factNum }>3%</p>
        <p className={ styles.factLabel }>из оставшихся 10%<br />продолжает существовать<br />более 3 лет</p>
      </li>

      <li className={ styles.fact }>
        <p className={ styles.factNum }>2%</p>
        <p className={ styles.factLabel }>способны взять максимум<br />из тренингов и сохранить новые привычки<br />на
            всю жизнь
        </p>
      </li>
    </ul>

    <StaticImage
      className={ styles.picture }
      quality="90"
      layout="constrained"
      src="./statistics.jpg"
      aspectRatio={ 320 / 423 }
      width={ 320 }
      formats={ [ 'auto', 'webp', 'avif' ] }
      placeholder="blurred"
      alt=""
    />

    <div className={ styles.content }>
      <h2 className={ styles.heading }>Где в этой статистике ты?</h2>
      <p>Те, кто входят в эти заветные 2% идут не одни. Их сопровождают команды! Наставники, коучи, психологи. Именно
          «свита» помогает королю быть королем.
      </p>
      <p>Начни создавать свою команду мечты с профессионального психолога и коуча!</p>

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

export default Statistics;