import React from 'react';
import { Link } from 'gatsby';

import Container from '../Container';
import Socials from '../Socials';

import * as styles from './Footer.module.css';

const Footer = () => (
  <footer className={ styles.footer }>
    <Container
      className={ styles.container }
    >
      <Link
        className={ styles.privacy }
        to="/privacy-policy"
      >
          Политика конфиденциальности
      </Link>

      <div className={ styles.copyright }>
        { new Date().getFullYear() } • Дизайн и разработка <b>d8v.design</b>
      </div>

      <div className={ styles.socials }>
        <Socials />
      </div>
    </Container>
  </footer>
);

export default Footer;