import React, { Component } from 'react';
import Habit from './habit';

//Habits안에 습관들의 데이터와 증가 감소 삭제등의 모든 로직들을 여기에 정의

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            //handleIncrement라는 변수는 함수를 가리키고 있다. 함수는 Object의 일종 handleIncrement라는 변수는
            //해당 함수를 가리키고 있기 대문에 함수의 이름을 인자로 전달해주면 함수를 가리키고있는 참조값을 전달하는것이기 때문에
            //함수를 바로 호출하는것이 아니라 해당 참조값만 onIncrement라는 prop으로 전달해주게된다.
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
