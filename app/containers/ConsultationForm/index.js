import React from 'react';

export default class ConsultationForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="consultation">
        <form>
          <input
            name="name"
            placeholder="Name"
            type="text"
            required
            autoComplete="on"
            // value={this.state.name}
            // onChange={this.handleChange('name')}
          />
          <input
            name="email"
            placeholder="E-mail"
            type="email"
            required
            autoComplete="on"
            // value={this.state.name}
            // onChange={this.handleChange('name')}
          />
          <button id="consultation-button">
            Get Your Free Consultation
          </button>
        </form>
      </div>
    );
  }
}
