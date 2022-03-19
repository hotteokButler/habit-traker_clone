import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return (
      <button className="habit_resetBtn" onClick={this.props.onReset}>
        Reset All
      </button>
    );
  }
}

export default Reset;
