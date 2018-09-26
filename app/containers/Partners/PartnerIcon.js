import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import ScrollAnimation from 'react-animate-on-scroll';

export default class IconComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.styles = {
      container: {
        height: '300px',
        width: 'calc(90vw/5)',
        margin: 'calc(10vw/8)',
        flex: 'auto',
        textAlign: 'center',
      },
      img: {
        height: 'auto',
        maxWidth: '100%',
      },
    };
  }
  handleMouseEnter = () => {
    this.setState({
      hover: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      hover: false,
    });
  }

  displayContent() {
    if (!this.state.hover) {
      return (
        <div
          // onMouseEnter={this.handleMouseEnter}
          style={this.styles.container}
        >
          <img
            style={this.styles.img}
            src={this.props.src}
            alt={this.props.alt}
          />
        </div>
      );
    }
    // return (
      // <div
      //   style={this.styles.hoverRoot}
      //   onMouseLeave={this.handleMouseLeave}
      // >
      //   <SvgIcon style={this.styles.hoverIcon}>
      //     <path fill="#FFF" d={this.props.iconPath} />
      //   </SvgIcon>
      //   <h3 style={this.styles.hoverTitle}>{this.props.title}</h3>
      //   <p style={this.styles.hoverDetails}>{this.props.details}</p>
      // </div>
    // );
  }

  render() {
    return (
      // <ScrollAnimation
      //   style={this.styles.container}
      //   animatePreScroll={false}
      //   animateIn={this.props.animate}
      //   animateOnce
      //   animateOut="fadeOut"
      // >
        this.displayContent()
      // </ScrollAnimation>
    );
  }
}