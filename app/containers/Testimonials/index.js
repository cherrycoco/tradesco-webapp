import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CommentSelectors from './CommentSelectors';
import Comment from './Comment';

const styles = {
  root: {
    background: `linear-gradient(
      rgba(255, 255, 255, 0.92), 
      rgba(255, 255, 255, 0.92)),
      url(http://heli-4437.kxcdn.com/wp-content/uploads/2015/09/parallax02.jpg)`,
    margin: '50px 0',
    // Create the parallax scrolling effect
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '400px',
  },
  whatPeopleSay: {
    width: '40%',
    marginLeft: '9%',
    marginRight: '1%',
    paddingTop: '100px',
    float: 'left',
  },
  comments: {
    float: 'right',
    width: '40%',
    marginLeft: '3%',
    marginRight: '7%',
    paddingTop: '50px',
  },
  h2: {
    fontWeight: 200,
    fontSize: '2rem',
    letterSpacing: '2px',
    color: 'black',
    textAlign: 'left',
  },
  bold: {
    fontWeight: 900,
  },
};

export default class Testimonials extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ScrollAnimation animatePreScroll={false} animateIn="fadeIn" animateOut="fadeOut">
        <div style={styles.root}>
          <div style={styles.whatPeopleSay}>
            <h2 style={styles.h2}>
              <b style={styles.bold}>WHAT</b>PEOPLESAY
            </h2>
            <p>TradesCo is the bookkeeping solution for small construction businesses. Here is what our clients have to say about working with us.</p>
          </div>
          <div style={styles.comments}>
            <CommentSelectors />
            <Comment 
              comment={this.props.comment}
              name={this.props.name}
              business={this.props.business}
              img={this.props.img}
            />
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}