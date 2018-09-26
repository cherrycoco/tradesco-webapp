/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Introduction from '../Introduction/index';
import AboutUs from '../AboutUsMini';
import Process from '../Process';
import ConnectUs from '../ConnectUs';
import ScrollToTop from '../ScrollToTop';

const styles = {
  root: {
    backgroundColor: 'white',
  },
};

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={styles.root}>
        <ScrollToTop />
        <Introduction />
        <AboutUs />
        <Process />
        <ConnectUs title="Connect with TradesCo" description="Find out how TradesCo can help your business by connecting with us now." />
      </div>
    );
  }
}
