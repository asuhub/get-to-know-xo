import React from 'react';
import styles from './card.scss';
import { Link } from 'react-router';

const Card = ({ src, name, title, yoursTruly }) => (
  <div className="col-md-4 col-sm-6">
    <Link to="/stephaniemanwaring">
      <div className={`card ${styles['card-container']}`}>
        <img className={`card-img-top ${styles[`profile-pic`]}`} src={src} alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{name}</h4>
          <p className={`card-title ${styles['italic']}`}>{title}</p>
          <p className="card-text">{yoursTruly}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;

