import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = {
  root: {
    background: `linear-gradient(
      rgba(102,102,102, .6), 
      rgba(102,102,102, .6)),
      url(http://bbkhq.com/wp-content/uploads/2015/12/iStock_000085065827_Large.jpg)`,
    margin: '50px 0',
    // Create the parallax scrolling effect
    // backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '400px',
    textAlign: 'center',
    fontWeight: 300,
    color: 'white',
  },
  h1: {
    fontSize: '2.5em',
    fontFamily: 'Poiret One, cursive',
    paddingTop: '50px',
  },
  p: {
    fontWeight: 500,
    fontSize: '1.3em',
    padding: '10px 0 30px 0',
    color: 'lightgray',
  },
  icon: {
    width: '30px',
    height: '30px',
    marginTop: '5px',
    marginLeft: '15px',
  },
};

export default class ConnectUs extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ScrollAnimation animatePreScroll={false} animateIn="fadeIn" animateOut="fadeOut">
        <div id="connectUs" style={styles.root}>
          <h1 style={styles.h1}>{this.props.title}</h1>
          <p style={styles.p}>{this.props.description}</p>
          <ScrollAnimation delay={100} animatePreScroll={false} animateIn="zoomIn" animateOut="fadeOut">
            <button>
              GET STARTED
            </button>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    );
  }
}
