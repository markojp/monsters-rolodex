import { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    count: 0,
  };

  handleCountChange = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    const count = this.state.count;
    const incrementCount = this.handleCountChange;

    return (
      <div className='App'>
        <div>
          <h1>Hello World</h1>
          <p>Hello React</p>

          <button type='button' className='counter' onClick={incrementCount}>
            Count is {count}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
