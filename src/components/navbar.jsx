import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <>
        <i className="fa-brands fa-canadian-maple-leaf navBar_logo"></i>
        <span className="navBar_title">Habit Tracker</span>
        <p className="navBar_countBox">{this.props.checkAllhabits}</p>
      </>
    );
  }
}

export default Navbar;
