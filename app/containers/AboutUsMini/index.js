import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import IconComponent from '../../components/IconComponent';

const styles = {
  container: {
    width: '50%',
    fontSize: '1.3em',
    color: '#4A4B4E',
    textAlign: 'center',
    margin: '100px auto',
  },
  tripleIcon: {
    display: 'flex',
  },
};

export default class AboutUs extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <ScrollAnimation animateOnce animatePreScroll={false} animateIn="fadeInLeft" animateOnce>
          <div id="about-us" style={styles.container}>
            <p>
              You’re a small business owner with lots to do. We’re professional bookkeepers with experience serving entrepreneurs.
            </p>
            <p>
              Let us take bookkeeping off your hands forever—so you can focus on what matters most.
            </p>
          </div>
        </ScrollAnimation>
        <div style={styles.tripleIcon}>
          <IconComponent
            animate="fadeInLeft"
            title="Personalized Service"
            iconPath="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
            hoverImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbD6JKCFBVxeBFCS2eUT7cfz6kzk2bYs8yn6Bx_fF7aoxnZ_J2A"
            details="Your bookkeeping team imports bank statements, categorizes transactions, and prepares financial statements every month. We will work with you to tailor a bookkeeping service that works for you!"
          />
          <IconComponent
            animate="fadeInDown"
            title="Financial Insight"
            iconPath="M3,13H7V23H3V13M10,14H14V23H10V14M17,9H21V23H17V9M17,1H21V5H20V3.06L11.97,11.09L8,7.12L3.4,11.72L2.34,10.66L8,5L11.97,8.97L18.94,2H17V1Z"
            hoverImg="https://translator.financial/sites/default/files/images/Professional%20translations%20of%20financial%20reports.jpg"
            details="Monthly financial statements and expense overviews keep you in control of your money. At-a-glance visual reports help you see the big picture and give you actionable insights to help you grow your business. You’ll never be in the dark again."
          />
          <IconComponent
            animate="fadeInRight"
            title="Recommendation / Alerts"
            iconPath="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z"
            hoverImg="https://image.freepik.com/free-photo/close-up-of-team-business-people-discussing-a-financial-plan-at_1150-843.jpg"
            details="We can make recommendations to improve your business. Essentially, you’ll have a Controller/CFO on your team."
          />
        </div>
      </div>
    );
  }
}
