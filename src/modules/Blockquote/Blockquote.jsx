import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Container from '~components/Container';

import * as styles from './Blockquote.module.css';

const Blockquote = () => (
  <section className={ styles.blockquote }>
    <Container className={ styles.container }>
      <StaticImage
        className={ styles.picture }
        quality="90"
        layout="constrained"
        src="./blockquote.jpg"
        aspectRatio={ 1 }
        formats={ [ 'auto', 'webp', 'avif' ] }
        placeholder="blurred"
        transformOptions={
          {
            cropFocus: 'center',
          }
        }
        alt=""
      />


      <blockquote className={ styles.content }>
          «Единственная причина, почему так немного людей из нас добиваются своего — неумение сосредоточиться: мы
          никогда не концентрируемся на своей цели. Многие просто плывут по жизни, так никогда и не решив, чего они
          хотят»
        <footer className={ styles.footer }>
          <cite className={ styles.author }>Тони Роббинс</cite>
        </footer>
      </blockquote>
    </Container>
  </section>
);

export default Blockquote;