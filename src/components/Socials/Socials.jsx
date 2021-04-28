import React from 'react';

import Icon from '../Icon';

import * as styles from './Socials.module.css';

const Socials = () => (
  <ul
    className={ styles.socials }
    id="socials"
  >
    <li className={ styles.item }>
      <a
        className={ styles.link }
        href="https://www.facebook.com/psy2biz1/"
        target="_blank"
        title="Facebook"
        aria-label="Facebook"
        rel="noreferrer"
      >
        <Icon
          className={ styles.icon }
          width="32"
          height="32"
          icon="facebook"
        />
      </a>
    </li>
    <li className={ styles.item }>
      <a
        className={ styles.link }
        href="https://vk.com/psy2biz"
        target="_blank"
        title="ВКонтакте"
        aria-label="ВКонтакте"
        rel="noreferrer"
      >
        <Icon
          className={ styles.icon }
          width="32"
          height="32"
          icon="vk"
        />
      </a>
    </li>
    <li className={ styles.item }>
      <a
        className={ styles.link }
        href="https://www.instagram.com/psy2biz/"
        target="_blank"
        title="Instagram"
        aria-label="Instagram"
        rel="noreferrer"
      >
        <Icon
          className={ styles.icon }
          width="32"
          height="32"
          icon="instagram"
        />
      </a>
    </li>
  </ul>
);

export default Socials;