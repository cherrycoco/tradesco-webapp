import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollToTop from '../ScrollToTop';
import ConnectUs from '../ConnectUs';

const styles = {
  h2: {
    fontSize: '1.6rem',
    letterSpacing: '0.05em',
  },
  p: {
    width: '45%',
    minWidth: '500px',
    textAlign: 'center',
    margin: '50px auto',
    fontSize: '1.2rem',
    fontWeight: 400,
    letterSpacing: '0.1em',
  },
  video: {
    width: 560,
    height: 315,
  },
};

export default class AboutUs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="how-it-works">
        <ScrollToTop />
        <h2>How Our Online Bookkeeping Works</h2>
        <p style={styles.p}>We give you a team of bookkeepers to do your books, and intuitive software to monitor your financials. It’s everything you need to do your bookkeeping—without actually having to do your bookkeeping.</p>
        <p align="center"><iframe style={styles.video} src="https://www.youtube.com/embed/lDMOfUWypgA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></p>
        <h2 style={styles.h2}>Here’s what working with TradesCo looks like</h2>
        <ConnectUs title="Ready to get started?" description="Connect with us to see how your business can benefit!" />
      </div>
    );
  }
}
