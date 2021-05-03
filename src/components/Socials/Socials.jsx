import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Icon from '../Icon';

import * as styles from './Socials.module.css';

const Socials = () => {

  const { allWpMenu } = useStaticQuery(graphql`
      query SocialsMenu {
        allWpMenu {
          nodes {
            menuItems {
              nodes {
                path
                title
                url
                label
              }
            }
            locations
          }
        }
      }
    `);

  const socialsMenu = allWpMenu.nodes.find((item) => item.locations.includes('GATSBY_FOOTER_MENU'));

  const renderItems = socialsMenu.menuItems.nodes.map((item) => (
    <li className={ styles.item }>
      <a
        className={ styles.link }
        href={ item.path }
        target="_blank"
        title={ item.title }
        aria-label={ item.title }
        rel="noreferrer"
      >
        <Icon
          className={ styles.icon }
          width="32"
          height="32"
          icon={ item.label }
        />
      </a>
    </li>
  ));

  return (
    <ul
      className={ styles.socials }
      id="socials"
    >
      { renderItems }
    </ul>
  );
};

export default Socials;