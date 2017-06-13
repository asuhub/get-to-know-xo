import React from 'react';
import FilterMenu from '../filter-menu';
import Cards from '../cards';
import styles from './homepage.scss';

const Homepage = () => (
  <div className={styles['spacer']}>
    <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-2">
            <FilterMenu />
        </div>
        <div className={`col-sm-8 col-md-8 col-lg-10 ${styles['right']}`}>
            <Cards />
        </div>
    </div>
  </div>
);

export default Homepage;

