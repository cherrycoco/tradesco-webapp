import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = {
  root: {
    color: 'white',
    margin: '10px',
  },
  title: {
    display: 'inline',
    marginLeft: '10px',
  },
};

export default class AddressIcon extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.root}>
        <SvgIcon style={styles.icon}>
          <path fill="white" d={this.props.iconPath} />
        </SvgIcon>
        <div style={styles.title}>{this.props.title}</div>
      </div>
    );
  }
}