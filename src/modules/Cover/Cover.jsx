import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '~components/Button';
import Container from '~components/Container';
import { ModalForm } from '~components/Form';
import Icon from '~components/Icon';

import * as styles from './Cover.module.css';

const Cover = () => (
  <section className={ styles.cover }>
    <Container className={ styles.container }>
      <div className={ styles.content }>
        <h1>Обрети силу<br /> и порядок в жизни,</h1>
        <p>благодаря авторскому обучению<br /> от Ирины Вяткиной</p>

        <ModalForm>
          {
            (openModal) => (
              <Button
                onClick={ openModal }
              >Записаться на бесплатную стратегическую сессию</Button>
            )
          }
        </ModalForm>
      </div>

      <ul className={ styles.features }>
        <li>
          <Icon
            className={ styles.featuresIcon }
            width="40"
            height="40"
            icon="result"
          />
          <p className={ styles.featuresLabel }>
              Работаю до измеримого результата
          </p>
        </li>
        <li>
          <Icon
            className={ styles.featuresIcon }
            width="40"
            height="40"
            icon="expert"
          />
          <p className={ styles.featuresLabel }>
              Возвращаю уверенность в себе
          </p>
        </li>
        <li>
          <Icon
            className={ styles.featuresIcon }
            width="40"
            height="40"
            icon="medicine"
          />
          <p className={ styles.featuresLabel }>
              Помогу победить страхи и усилить бизнес
          </p>
        </li>
      </ul>

      <div className={ styles.picture }>
        <figure className={ styles.pictureWrapper }>
          <StaticImage
            className={ styles.pictureImage }
            quality="90"
            layout="constrained"
            src="./cover.jpg"
            formats={ [ 'auto', 'webp', 'avif' ] }
            placeholder="blurred"
            alt=""
          />
          <figcaption className={ styles.pictureCaption }>
            <strong>Ирина Вяткина</strong>
            <p>Бизнес-психолог,<br /> тренер личностного роста,<br /> мотивационный оратор</p>
          </figcaption>
        </figure>
      </div>
    </Container>
  </section>
);

export default Cover;