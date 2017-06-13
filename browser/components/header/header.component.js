import React from 'react';
import styles from './header.scss';
import Icon from '@xo-union/tk-component-icons';
import Search from './searchbar.component';

const Header = () => (
  <div className={styles['header']}>
    <h2>Get To Know XO</h2>
    <Search />
    <Icon className={styles['login']} name="nav-signup-mobile" />
  </div>
);

export default Header;
