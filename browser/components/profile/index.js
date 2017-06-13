import React from 'react';
import styles from './profile.scss';

const Profile = () => (
  <div className="card col-8 offset-2">
    <img className={`card-img-top ${styles[`profile-pic`]}`} src="img/examplepic1.jpg" alt="Card image cap" />
    <div className="card-block">
      <div className="card-block">
        <h4 className="card-title">Stephanie Manwaring</h4>
        <p className={`card-title ${styles['italic']}`}>Associate Software Engineer</p>
        <p className={`card-title ${styles['italic']}`}>How to spot me in a crowd:   <span>I'm the one with the nape cut and likely drinking raw carrot juice out of mason jar.</span></p>
        <p className={`card-title ${styles['italic']}`}>A little more about me...:   <span>Hey! I'm Stephanie. Married to a guy named Phil. Trying to work on my posture. I'm on the 24th floor. Say HI ya'll!</span></p>
        <hr />
        <p className={`card-title ${styles['italic']}`}>Hometown:   <span>Provo, Utah</span></p>
        <p className={`card-title ${styles['italic']}`}>Interests:   <span>Making Bolivian food, Cycling on the Streets of NYC</span></p>
        <hr />
        <p className={`card-title ${styles['italic']}`}>Tags:   <span><a href="">Rick and Morty, Utah, Fullstack Academy, Bikes, Biking, Technology, React, Upper East Side, Snowboarding</a></span></p>
      </div>
    </div>
  </div>
);

export default Profile;
