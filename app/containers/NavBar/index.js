import React from 'react';
import Button from 'material-ui/Button';

export default class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Button>Introduction</Button>
        <Button>How It Works</Button>
        <Button>Pricing</Button>
        <Button>Blog</Button>
      </div>
    );
  }
}
