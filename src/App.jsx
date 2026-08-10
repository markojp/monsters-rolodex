import { Component } from 'react';

import './App.css';

const MONSTERS_API = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  state = {
    monsters: [],
    searchtext: '',
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

  handleSearchChange = (event) => {
    const searchtext = event.target.value.toLowerCase();
    this.setState(() => ({ searchtext }));
  };

  render() {
    const { monsters, searchtext } = this.state;
    const { handleSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchtext),
    );

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder={'search monsters'}
          value={searchtext}
          onChange={handleSearchChange}
        />
        {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
