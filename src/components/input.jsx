import React, { PureComponent } from 'react';

class Input extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    return (
      <form action="" ref={this.formRef} className="habit_input-box" onSubmit={this.onSubmit}>
        <input type="text" ref={this.inputRef} placeholder="Habit" className="habit_input" />
        <button className="habit_inputBtn">Add</button>
      </form>
    );
  }
}

export default Input;
