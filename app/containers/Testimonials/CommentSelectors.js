import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
  size: {
    width: 20,
    height: 20,
    float: 'right',
  },
  sizeIcon: {
    fontSize: 15,
  },
};

class RadioButtons extends React.Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={this.state.selectedValue === 'first'}
          onChange={this.handleChange}
          value="first"
          color="default"
          name="comment-selector"
          aria-label="First Comment"
          className={classes.size}
          icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
          checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
        />
        <Radio
          checked={this.state.selectedValue === 'second'}
          onChange={this.handleChange}
          value="second"
          color="default"
          name="comment-selector"
          aria-label="Second Comment"
          className={classes.size}
          icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
          checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
        />
        <Radio
          checked={this.state.selectedValue === 'third'}
          onChange={this.handleChange}
          value="third"
          color="default"
          name="comment-selector"
          aria-label="Third Comment"
          className={classes.size}
          icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
          checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
        />
        <div style={{clear: 'both'}} />
      </div>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);