import React from 'react';

export default ( { text, noPeople } ) => (
  <div>
    <a className={`waves-effect waves-light btn spacing ${ noPeople ? 'disabled' : ''}`}>{text}</a>
  </div>
);

