import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ConsultationForm from '../ConsultationForm/index';

const styles = {
  root: {
    height: '100vh',
    width: '100vw',
    background: `linear-gradient(
      rgba(255, 255, 255, 0.5), 
      rgba(255, 255, 255, 0.5)),
      url(https://previews.123rf.com/images/nateemee/nateemee1708/nateemee170800148/85057228-engineer-holding-helmet-for-workers-security-on-background-of-new-buildings-and-construction-cranes-.jpg)`,
    // backgroundImage: 'url(https://previews.123rf.com/images/nateemee/nateemee1708/nateemee170800148/85057228-engineer-holding-helmet-for-workers-security-on-background-of-new-buildings-and-construction-cranes-.jpg)',
    backgroundSize: 'cover',
    marginTop: '-85px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  slogan: {
    width: '500px',
    height: '50%',
    position: 'relative',
    top: '30%',
    left: '10%',
    lineHeight: 1,
    fontFamily: 'Lato',
  },
  h2: {
    color: '#4A4B4E',
    fontWeight: 400,
  },
  consultation: {
    marginLeft: '10%',
    marginTop: '50px',
  },
};

export default class Introduction extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div id="intro" style={styles.root}>
          <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut" style={styles.slogan}>
            <h1>You run your business.</h1>
            <h1>We’ll do your bookkeeping.</h1>
            <h2 style={styles.h2}>The #1 bookkeeping service for small construction companies.</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut" style={styles.consultation}>
            <ConsultationForm />
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    );
  }
}
