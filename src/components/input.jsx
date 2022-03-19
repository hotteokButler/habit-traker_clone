import React, { Component } from 'react';

class Input extends Component {
  onAddHabit = (event) => {
    this.props.onAddHabit(event);
  };
  onChangeHabit = (event) => {
    const newValue = event.target.value;
    this.props.onChangeHabit(newValue);
  };
  render() {
    return (
      <form action="" className="habit_input-box" onSubmit={this.onAddHabit}>
        <input
          type="text"
          placeholder="Habit"
          onChange={this.onChangeHabit}
          value={this.props.value}
          autoFocus
          id="habitInput"
          className="habit_input"
        />
        <button className="habit_inputBtn">Add</button>
      </form>
    );
  }
}

export default Input;
