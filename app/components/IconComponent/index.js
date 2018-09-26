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
        height: '330px',
        width: 'calc(90vw/3)',
        margin: 'calc(10vw/6)',
        position: 'relative',
        textAlign: 'center',
        fontFamily: 'Lato',
      },
      root: {
        transition: 'ease-in 0.2s',
        background: '#F3F3F3',
        height: '100%',
        width: '100%',
        position: 'absolute',
      },
      hoverRoot: {
        transition: 'ease-in 0.2s',
        background: `linear-gradient(
          rgba(0,0,0, .7), 
          rgba(0,0,0, .7)),
          url(${this.props.hoverImg})`,
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        position: 'absolute',
      },
      icon: {
        transition: 'ease-in 0.3s',
        width: 'calc(20vw/3)',
        height: 'calc(20vw/3)',
        display: 'block',
        margin: 'auto',
        marginTop: '75px',
      },
      title: {
        transition: 'ease-in 0.3s',
      },
      hoverIcon: {
        transition: 'ease-in 0.3s',
        width: 'calc(10vw/3)',
        height: 'calc(10vw/3)',
        display: 'block',
        margin: 'auto',
        marginTop: '30px',
      },
      hoverTitle: {
        transition: 'ease-in 0.3s',
        marginTop: '5px',
        color: 'white',
      },
      hoverDetails: {
        transition: 'ease-in 0.3s',
        color: 'white',
        marginLeft: '20px',
        marginRight: '20px',
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
          onMouseEnter={this.handleMouseEnter}
          style={this.styles.root}
        >
          <SvgIcon style={this.styles.icon}>
            <path fill="#2B2B2B" d={this.props.iconPath} />
          </SvgIcon>
          <h3 style={this.styles.title}>{this.props.title}</h3>
        </div>
      );
    }
    return (
      <div
        style={this.styles.hoverRoot}
        onMouseLeave={this.handleMouseLeave}
      >
        <SvgIcon style={this.styles.hoverIcon}>
          <path fill="#FFF" d={this.props.iconPath} />
        </SvgIcon>
        <h3 style={this.styles.hoverTitle}>{this.props.title}</h3>
        <p style={this.styles.hoverDetails}>{this.props.details}</p>
      </div>
    );
  }

  render() {
    return (
      <ScrollAnimation
        style={this.styles.container}
        animatePreScroll={false}
        animateIn={this.props.animate}
        animateOnce
        animateOut="fadeOut"
      >
        {this.displayContent()}
      </ScrollAnimation>
    );
  }
}
