import * as React from 'react';
import { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

import Container from '../Container';
import Logo from '../Logo';
import Menu from '../Menu';

import * as styles from './Header.module.css';

const Header = () => {
  const [ isScrolled, setScrolled ] = useState(false);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange((y) => {
      setScrolled(y > 50);
    });

    return () => {
      scrollY.clearListeners();
    };
  }, []);

  return (
    <motion.header className={ styles[isScrolled ? 'headerScrolled' : 'header'] } layout>
      <Container className={ styles.container }>
        <div className={ styles.logo }>
          <Logo />
        </div>

        <div className={ styles.menu }>
          <Menu />
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
