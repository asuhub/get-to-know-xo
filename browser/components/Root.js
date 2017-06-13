import React from 'react';
import Header from './header/header.component';
import Homepage from './homepage';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
