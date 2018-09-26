/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AboutUs from 'containers/AboutUs';
// import Header from '../Header';
// import Footer from '../Footer';
import './style.css';
import './pe-icon-7-stroke/css/pe-icon-7-stroke.css';
import LogIn from '../LogIn';
import WrappedComponent from './Layout';
import HomePage from '../HomePage';
import HowItWorks from '../HowItWorks';

// const styles = {
//   header: {
//     position: 'sticky',
//     top: 0,
//     zIndex: 1,
//   },
// };

export default class App extends React.Component {// eslint-disable-line react/prefer-stateless-function
  // componentDidMount() {
  //   document.addEventListener('scroll', this.handelScroll);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('scroll', this.handelScroll);
  // }

  // handelScroll() {
  //   const header = document.getElementById('header');
  //   if (window.scrollY > 130) {
  //     header.style.backgroundColor = 'white';
  //   } else {
  //     header.style.backgroundColor = 'initial';
  //   }
  // }

  render() {
    return (
      <div>
        <CssBaseline />
        {/* <div id="header" style={styles.header}>
          <Header />
        </div> */}
        <Switch>
          <Route exact path="/" component={WrappedComponent(HomePage)} />
          <Route path="/about-us" component={WrappedComponent(AboutUs)} />
          <Route path="/how-it-works" component={WrappedComponent(HowItWorks)} />
          <Route path="/log-in" component={LogIn} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}
