import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    backgroundColor: 'rgb(34, 34, 34)',
    marginTop: '15px',
  },
  h4: {
    marginTop: 0,
    color: 'white',
    padding: '40px',
    fontSize: '1.1rem',
    fontWeight: 300,
  },
  avatar: {
    width: 80,
    height: 80,
    float: 'left',
  },
  cite: {
    float: 'left',
    padding: '15px 20px',
  },
  name: {
    display: 'block',
    textTransform: 'uppercase',
    fontWeight: 400,
    fontSize: '18px',
    letterSpacing: '0.1em',
  },
  business: {
    display: 'block',
    color: '#444',
  }
};

export default class Comment extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ScrollAnimation animatePreScroll={false} animateIn="fadeIn" animateOut="fadeOut">
        <div style={styles.root}>
          <h4 style={styles.h4}>{this.props.comment}</h4>
        </div>
        <div>
          <Avatar
            alt={this.props.business}
            src={this.props.img}
            style={styles.avatar}
          />
          <div style={styles.cite}>
            <span style={styles.name}>{this.props.name}</span>
            <span style={styles.business}>{this.props.business}</span>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}