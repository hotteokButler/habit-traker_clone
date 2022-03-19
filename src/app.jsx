import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Input from './components/input';
import Navbar from './components/navbar';
import Reset from './components/reset';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
    value: '',
  };

  handleIncrement = (habit) => {
    //spread operator를 사용한 이유는 직접적으로 배열의 state를 수정하면 좋지 않기때문에 새로운 배열의 껍데기를 만든것 (간접 수정 위해)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);

    // 배열안에 있는 object에 직접 count를 아래와 같이 수정하는건 좀 💩내 나는 코드
    habits[index].count++;

    // key와 value가 동일하다면 하나만 써줘도된다!
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count <= 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (event) => {
    event.preventDefault();
    const value = this.state.value;
    const habits = [...this.state.habits];
    const id = Date.now();
    habits.push({
      id,
      name: value,
      count: 0,
    });
    this.setState({ habits });
  };

  handleChange = (newValue) => {
    this.setState({ value: newValue });
  };

  handleReset = () => {
    const habits = [...this.state.habits];

    habits.map((habit) => (habit.count = 0));
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <nav className="navBar">
          <Navbar checkAllhabits={this.state.habits.filter((item) => item.count > 0).length} />
        </nav>
        <div>
          <Input onAddHabit={this.handleAdd} onChangeHabit={this.handleChange} value={this.state.value} />
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
          <p className="habit_reset">
            <Reset onReset={this.handleReset} />
          </p>
        </div>
      </>
    );
  }
}

export default App;
