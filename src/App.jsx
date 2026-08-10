import { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    monsters: [
      { id: '1egyd', name: 'Jenny' },
      { id: '2drg', name: 'Zoeye' },
      { id: '3wyj', name: 'Antwon' },
      { id: '4shk', name: 'Rhonda' },
    ],
  };

  render() {
    const monsters = this.state.monsters;

    return (
      <div className='App'>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
