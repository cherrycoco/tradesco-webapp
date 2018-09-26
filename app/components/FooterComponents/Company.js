import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    height: '400px',
    minWidth: '150px',
    paddingTop: '50px',
    paddingRight: '50px',
    color: 'white',
    float: 'right',
    fontWeight: 300,
    lineHeight: 2,
  },
  h3: {
    fontWeight: 300,
    marginBottom: '5px',
  },
};

export default class Company extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="news" style={styles.root}>
          <h3 style={styles.h3}>BLOG</h3>
          <div><a>What is bookkeeping?</a></div>
          <div><a>Difference between bookkeeping and accounting</a></div>
          <div><a>When should I incorporate?</a></div>
        </div>
        <div className="company" style={styles.root}>
          <h3 style={styles.h3}>COMPANY</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/log-in">Log In</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div style={{clear: 'both'}}></div>
    </div>
    );
  }
}
