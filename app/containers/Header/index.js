import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/index';

const styles = {
  root: {
    height: '60px',
  },
  img: {
    width: '60px',
    height: '60px',
    float: 'left',
    marginLeft: '20px',
  },
  h1: {
    float: 'left',
    margin: '6px 0 0 20px',
    fontFamily: 'Poiret One, cursive',
    fontWeight: 100,
  },
  clearFloat: {
    clear: 'both',
  },
};

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.root}>
        <h1 style={styles.h1}><Link to="/">TradesCo</Link></h1>
        <NavBar />
        <div style={styles.clearFloat} />
      </div>
    );
  }
}
