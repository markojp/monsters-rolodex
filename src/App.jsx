import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
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
    const searchtext = event.target.value.toLocaleLowerCase();
    this.setState(() => ({ searchtext }));
  };

  render() {
    const { monsters, searchtext } = this.state;
    const { handleSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchtext),
    );

    return (
      <div className='App'>
        <SearchBox
          className='search-box'
          placeholder={'search monsters'}
          searchText={searchtext}
          onChangeHandler={handleSearchChange}
        />
        <CardList itemlist={filteredMonsters} />
      </div>
    );
  }
}

export default App;
