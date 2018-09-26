import React from 'react';
import { Link } from 'react-router-dom';
import AddressIcon from '../../components/FooterComponents/AddressIcon';
import Company from '../../components/FooterComponents/Company';

const styles = {
  root: {
    marginTop: '50px',
    backgroundColor: '#222222',
    height: '400px',
    color: 'white',
    letterSpacing: '0.05em',
    lineHeight: 1.5,
  },
  info: {
    padding: '50px',
    height: '300px',
    minWidth: '300px',
    float: 'left',
  },
  h2: {
    fontFamily: 'Poiret One, cursive',
    fontWeight: 100,
    paddingLeft: '20px',
  },
  h3: {
    color: 'rgb(34, 34, 34)',
    fontWeight: 200,
    textAlign: 'center',
  }
}

export default class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.info}>
          <h2 style={styles.h2}><Link to="/">TradesCo</Link></h2>
          <AddressIcon
            iconPath="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
            title="(778) 836 9011"
          />
          <AddressIcon
            iconPath="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z"
            title="info@tradesco.io"
          />
          <AddressIcon
            iconPath="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
            title="Vancouver, BC Canada"
          />
        </div>
        <Company />
        <h3 style={styles.h3}>Made with <i className="pe-7s-like"></i> by Cherry</h3>
      </div>
    );
  }
}