import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = {
  root: {
    transition: 'ease-in 2s',
    width: 'calc(100vw/5)',
    color: 'white',
    fontFamily: 'Lato, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  icon: {
    width: '50px',
    height: '50px',
    display: 'block',
    margin: 'auto',
  },
};

export default class ProcessIcon extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ScrollAnimation
        style={styles.root}
        animatePreScroll={false}
        animateIn="fadeInUp"
        animateOnce
        delay={this.props.delay}
        animateOut="fadeOut"
      >
        <SvgIcon style={styles.icon}>
          <path fill="white" d={this.props.iconPath} />
        </SvgIcon>
        <h3 style={styles.title}>{this.props.title}</h3>
        <p style={styles.description}>{this.props.description}</p>
      </ScrollAnimation>
    );
  }
}