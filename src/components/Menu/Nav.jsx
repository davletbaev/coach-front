import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import * as styles from './Menu.module.css';

const Nav = ({ onNavigate }) => {
  const { allWpMenu } = useStaticQuery(graphql`
      query MainMenu {
        allWpMenu {
          nodes {
            menuItems {
              nodes {
                path
                url
                label
              }
            }
            locations
          }
        }
      }
    `);

  const mainMenu = allWpMenu.nodes.find((item) => item.locations.includes('GATSBY_HEADER_MENU'));

  const navigate = (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').slice(1);

    const target = document.getElementById(targetId);

    typeof window !== 'undefined' && window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });

    onNavigate();
  };

  const renderItems = mainMenu.menuItems.nodes.map((item) => (
    <li className={ styles.navItem }>
      <a
        href={ item.path }
        className={ styles.navLink }
        onClick={ navigate }
      >{ item.label }</a>
    </li>
  ));

  return (
    <ul
      className={ styles.nav }
    >
      { renderItems }
    </ul>
  );
};

Nav.propTypes = {
  onNavigate: PropTypes.func,
};

Nav.defaultProps = {
  onNavigate: () => {
  },
};

export default Nav;