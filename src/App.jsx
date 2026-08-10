import { Component } from 'react';

import './App.css';

const MONSTERS_API = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  state = {
    monsters: [],
  };

  componentDidMount() {
    this.getMonsters();
  }

  getMonsters = async () => {
    try {
      const response = await fetch(MONSTERS_API);
      if (!response.ok) throw new Error('Network response was not ok');
      const monsters = await response.json();

      this.setState(() => ({ monsters }));
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  render() {
    const { monsters } = this.state;

    return (
      <div className='App'>
        {monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
