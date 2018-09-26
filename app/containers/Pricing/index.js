import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = {
  container: {
    backgroundColor: 'white',
  },
  root: {
    height: '500px',
    width: '100vw',
    position: 'relative',
    top: '-85px',
    background: `linear-gradient(
      rgba(255, 255, 255, .6), 
      rgba(255, 255, 255, .6)),
      url(https://enginet.ca/wp-content/uploads/2017/11/Business_.jpg)`,
      /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#4A4B4E',
  },
  text: {
    position: 'absolute',
    width: '700px',
    top: '150px',
    left: '100px',
  },
  h2: {
    lineHeight: 1.2,
    fontSize: '2rem',
    fontWeight: 300,
    letterSpacing: '0.1em',
    textAlign: 'left',
  },
  bold: {
    fontWeight: 900,
  },
};

export default class Pricing extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.container}>
        <ScrollAnimation
          style={styles.root}
          animateIn="fadeIn"
          animateOnce
        >
          <ScrollAnimation
            style={styles.text}
            animateIn="fadeInLeft"
            animateOnce
          >
            <h2 style={styles.h2}>What is holding <b style={styles.bold}>you</b> back? Don't let it be your bookkeeping.</h2>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    );
  }
}
