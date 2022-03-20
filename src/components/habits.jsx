import React, { Component } from 'react';
import Habit from './habit';
import Input from './input';

//Habits안에 습관들의 데이터와 증가 감소 삭제등의 모든 로직들을 여기에 정의
//여기서는 계속해서 porps.habits통해서 habits의 목록들을 받아와서 업데이트해주기때문에 Pure을쓰던 안쓰던 똑같아
//안쓰는게 낫다. 불필요한 operating만 발생함
class Habits extends Component {
  /*
  props를 통해 함수를 인자로 받아올때 onIncrement={(habit)=>{this.props.onIncrement(habit)}}라고 바로 호출 해줘도 되지만
  render()가 호출될때마다 해당 arrow function이 매번 만들어지는 것은 사실이고 매번 만들어지는게 메모리에 영향이 가지만 이렇게
  계속 만들어지는 것은 상대적으로 크게 차지하지는 않는다. 
  따라서 이렇게 써도 되는 경우도 있지만 안되는 경우도 있다 (React Hook에서 추가 정리)
  */

  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  handleReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <div>
        <Input onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              //handleIncrement라는 변수는 함수를 가리키고 있다. 함수는 Object의 일종 handleIncrement라는 변수는
              //해당 함수를 가리키고 있기 때문에 함수의 이름을 인자로 전달해주면 함수를 가리키고있는 참조값을 전달하는것이기 때문에
              //함수를 바로 호출하는것이 아니라 해당 참조값만 onIncrement라는 prop으로 전달해주게된다.
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <p className="habit_reset">
          <button className="habit_resetBtn" onClick={this.handleReset}>
            Reset All
          </button>
        </p>
      </div>
    );
  }
}

export default Habits;
