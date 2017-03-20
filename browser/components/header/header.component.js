import React from 'react';
import './header.scss';

const Header = ()  => (
      <header>
        <h2>Spotify Code Challenge </h2>
        <h5>Built by Stephanie Manwaring</h5>
        <div className="center-text">
          <a className="inline" href="https://github.com/smanwaring/codeChallengeFellowship"><div>github repository</div></a>
          <a className="inline" href="https://stephanie.manwaring.io/"><div>stephanie.manwaring.io</div></a>
        </div>
      </header>
);

export default Header;

