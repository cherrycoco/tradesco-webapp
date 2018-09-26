import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    background: `linear-gradient(
      rgba(34,34,34,0.6), 
      rgba(34,34,34,0.6)),
      url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg)`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    color: 'white',
  },
  h1: {
    fontFamily: 'Poiret One, cursive',
    fontWeight: 900,
    margin: 0,
    marginBottom: '20px',
  },
  loginForm: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '500px',
    width: '400px',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    top: '100px',
  },
};

export default class LogIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.loginForm}>
          <h1 style={styles.h1}><Link to="/">TradesCo</Link></h1>
          <form id="login-form">
            <div className="login-input">
              <Icon className="login-icon">person</Icon>
              <input autoComplete="on" placeholder="Username" type="email" />
            </div>
            <div className="login-input">
              <Icon className="login-icon">lock</Icon>
              <input autoComplete="on" placeholder="Password" type="password" />
            </div>
            <button>Log In</button>
            <h5>Forgot your password?</h5>
          </form>
        </div>
      </div>
    );
  }
}
