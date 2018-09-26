import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';
import './pe-icon-7-stroke/css/pe-icon-7-stroke.css';


const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
};

const WrappedComponent = (Component) => class Layout extends React.Component {// eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    document.addEventListener('scroll', this.handelScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handelScroll);
  }

  handelScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 130) {
      header.style.backgroundColor = 'white';
    } else {
      header.style.backgroundColor = 'initial';
    }
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <div id="header" style={styles.header}>
          <Header />
        </div>
        <Component />
        <Footer />
      </div>
    );
  }
};


export default WrappedComponent;
