import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class TeamBio extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.styles = {
      container: {
        position: 'relative',
        width: 'calc((90vw - 160px)/3)',
        height: '450px',
        textAlign: 'center',
        margin: 'calc(10vw/6)',
        fontWeight: 300,
      },
      root: {
        height: '85%',
        width: '100%',
        backgroundImage: `url(${this.props.url})`,
        backgroundPosition: 'center',
      },
      tag: {
        position: 'absolute',
        bottom: 0,
        left: '10%',
        backgroundColor: '#222222',
        height: '30%',
        width: '80%',
        zIndex: 2,
      },
      hoverRoot: {
        backgroundColor: 'rgba(0,0,0, .7)',
        width: '100%',
        height: '100%',
      },
      h4: {
        fontWeight: 300,
        marginBottom: 0,
        marginTop: '30px',
        color: '#878787',
      },
      h3: {
        fontWeight: 400,
        marginTop: '10px',
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      },
      bio: {
        color: 'white',
        paddingTop: '20px',
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
    return (
      <div className="bio animated fadeIn" style={this.styles.hoverRoot}>
        <div className="animated fadeInDown" style={this.styles.bio}>
          {this.props.bio}
        </div>
      </div>
    );
  }

  render() {
    return (
      <ScrollAnimation
        animatePreScroll={false}
        animateIn="fadeIn"
        animateOnce
        animateOut="fadeOut"
      >
        <div style={this.styles.container}>
          <div
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={this.styles.root}
          >
            {/* <div className="bio animated fadeIn" style={this.styles.hoverRoot}>
              <div className="animated fadeInDown" style={this.styles.bio}> */}
                {/* {this.state.hover || this.displayContent()} */}
              {/* </div> */}
            {/* </div> */}
            {this.state.hover && this.displayContent()}
          </div>
          <div style={this.styles.tag}>
            <h4 style={this.styles.h4}>{this.props.title}</h4>
            <h3 style={this.styles.h3}>{this.props.name}</h3>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}
