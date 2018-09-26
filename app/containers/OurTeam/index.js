import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TeamBio from './TeamBio';

const styles = {
  root: {
    marginLeft: '80px',
    marginRight: '80px',
  },
  h2: {
    fontWeight: 200,
    fontSize: '2.5rem',
    letterSpacing: '1px',
    color: 'black',
    textAlign: 'left',
  },
  bold: {
    fontWeight: 900,
  },
  teamBio: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'scroll',
  },
};

export default class OurTeam extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ScrollAnimation animatePreScroll={false} animateIn="fadeIn" animateOut="fadeOut">
        <div style={styles.root}>
          <h2 style={styles.h2}>
            OUR<b style={styles.bold}> AMAZING </b>TEAM
          </h2>
          <div style={styles.teamBio}>
            <TeamBio bio="My name is Taigan" title="Director" name="Taigan Allerton" url="http://heli-4437.kxcdn.com/wp-content/uploads/2015/09/people01.jpg" />
            <TeamBio bio="My name is Steph" title="Director" name="Stephanie Van Dyck" url="http://heli-4437.kxcdn.com/wp-content/uploads/2015/09/people02.jpg" />
            <TeamBio bio="My name is Kristen" title="Director" name="Kristen Robinson" url="http://heli-4437.kxcdn.com/wp-content/uploads/2015/09/people03.jpg" />
            <TeamBio bio="My name is Cherry" title="Director" name="Cherry Xu" url="http://heli-4437.kxcdn.com/wp-content/uploads/2015/09/people01.jpg" />
            {/* <TeamBio url="http://heli-4437.kxcdn.com/wp-content/uploads/2015/09/people02.jpg" /> */}
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}
