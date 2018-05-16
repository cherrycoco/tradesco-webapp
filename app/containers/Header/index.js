import React from 'react';
import NavBar from '../NavBar/index';

export default class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <img alt="logo" src="../../images/icon-120x120.png" />
        <NavBar />
      </div>
    );
  }
}
