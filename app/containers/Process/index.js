import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ProcessIcon from '../../components/ProcessIcon';

const styles = {
  root: {
    background: `linear-gradient(
      rgba(0,0,0, .7), 
      rgba(0,0,0, .7)),
      url(http://heli-4437.kxcdn.com/wp-content/uploads/2015/09/parallax02.jpg)`,
    // backgroundColor: '#222222',
      /* Full height */
      // height: '100%'; 

      /* Create the parallax scrolling effect */
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    color: 'white',
    marginTop: '100px',
  },
  h1: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 300,
    paddingTop: '40px',
    margin: 0,
  },
  processIcon: {
    display: 'flex',
  }
};

export default class Process extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ScrollAnimation
        style={styles.root}
        animatePreScroll={false}
        animeOnce
        animateIn="fadeIn"
      >
        <h1 style={styles.h1}>OUR PROCESS</h1>
        <div style={styles.processIcon}>
          <ProcessIcon
            delay={100}
            title="Discovery"
            description="We’d love to hear about your goals and aspirations. After understanding the big picture, we’ll dig into the details of your bookkeeping process so we can assess your needs."
            iconPath="M10,13C9.65,13.59 9.36,14.24 9.19,14.93C6.5,15.16 3.9,16.42 3.9,17V18.1H9.2C9.37,18.78 9.65,19.42 10,20H2V17C2,14.34 7.33,13 10,13M10,4A4,4 0 0,1 14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75 11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,5.9A2.1,2.1 0 0,0 7.9,8A2.1,2.1 0 0,0 10,10.1A2.1,2.1 0 0,0 12.1,8A2.1,2.1 0 0,0 10,5.9M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14Z"
          />
          <ProcessIcon
            delay={600}
            title="Proposal"
            description="Once we understand your needs, we’ll send over a proposal that outlines our plan for tackling your challenges and a fixed monthly price for those bookkeeping services."
            iconPath="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"
          />
          <ProcessIcon
            delay={1200}
            title="Set-Up"
            description="Once you accept our proposal, we’ll get your bookkeeping tidied and up to date and begin implementing cloud accounting tools that will ensure proper bookkeeping going forward."
            iconPath="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
          />
          <ProcessIcon
            delay={1800}
            title="Get Connected"
            description="Once the set-up is done, the hard part is over. You’ll be connected to your CPA-level bookkeeper and they will become your main point of contact."
            iconPath="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"
          />
          <ProcessIcon
            delay={2400}
            title="Reviews"
            description="Once the clean up is done, the hard part is over. You’ll get connected to your bookkeeper and he/she will become your main point of contact."
            iconPath="M3,13H7V23H3V13M10,14H14V23H10V14M17,9H21V23H17V9M17,1H21V5H20V3.06L11.97,11.09L8,7.12L3.4,11.72L2.34,10.66L8,5L11.97,8.97L18.94,2H17V1Z"
          />
        </div>
      </ScrollAnimation>
    );
  }
}
