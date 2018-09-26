import React from 'react';

const styles = {
  p1: {
    opacity: 1,
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
  },
  p2: {
    opacity: 0.75,
    transform: 'translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0)',
  },
  p3: {
    opacity: 0.75,
    transform: 'translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0)',
  },

};

export default class Introduction extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={styles.root} onScroll={this.onScroll}>
        <p style={styles.p1}>You're off to Great Places!</p>
        <p style={styles.p2}>Today is your day!</p>
        <p>Your mountain is waiting,</p>
        <p>So... get on your way!” </p>
        <p></p>
        <p></p>
        <p>― Dr. Seuss, Oh, The Places You'll Go!</p>
        <p></p>
        <p>hello</p>
        <p>more hello</p>
        <p>how about now</p>
        <p>cherry here</p>
      </div>
    );
  }
}
