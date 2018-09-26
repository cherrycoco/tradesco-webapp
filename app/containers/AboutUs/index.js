import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import WhoWeAre from './WhoWeAre';
import OurTeam from '../OurTeam';
import Testimonials from '../Testimonials';
import ScrollToTop from '../ScrollToTop';

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
      url(https://www.mahindracomviva.com/wp-content/uploads/2017/03/Business-solution.jpg)`,
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
    bottom: '50px',
    right: '100px',
  },
  h2: {
    lineHeight: 1.2,
    fontSize: '2rem',
    fontWeight: 300,
    letterSpacing: '0.1em',
    textAlign: 'right',
  },
  bold: {
    fontWeight: 900,
  },
};

export default class AboutUs extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={styles.container}>
        <ScrollToTop />
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
            <h2 style={styles.h2}>At <b style={styles.bold}>TradesCo</b>, we understand your business challenges when it comes to bookkeeping and accounting.</h2>
          </ScrollAnimation>
        </ScrollAnimation>
        <WhoWeAre />
        <OurTeam />
        <Testimonials
          comment="With TradesCo, there’s a human being on the other side who’s deeply invested in the success of your business."
          name="Taigan Allerton"
          business="Tandem Construction"
          img="https://pro2-bar-s3-cdn-cf2.myportfolio.com/dc75edcf06f8de5cbc169733f764918e/d80d2ede-a4d7-4a08-8aba-327959989b89_rwc_0x0x1181x1181x1181.jpg?h=7f9f356f0a65ca3ae6b4dc17fcaa90c4"
        />
      </div>
    );
  }
}


