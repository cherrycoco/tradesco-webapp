import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    float: 'right',
    lineHeight: 4,
    marginRight: '20px',
    fontWeight: 100,
    height: '60px',
    color: '#222222',
  },
};

export default class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="navbar" style={styles.root}>
        <ul>
          <li><Link to="/">Introduction</Link></li>
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/log-in">Log In</Link></li>
        </ul>
      </div>

    );
  }
}
