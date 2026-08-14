import { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

const MONSTERS_API = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const getMonsters = async () => {
      try {
        const response = await fetch(MONSTERS_API);
        if (!response.ok) throw new Error('Network response was not ok');
        const newMonsters = await response.json();

        setMonsters(newMonsters);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    getMonsters();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchText),
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchText]);

  const handleSearchChange = (event) => {
    const searchtext = event.target.value.toLocaleLowerCase();
    setSearchText(searchtext);
  };

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        placeholder={'search monsters'}
        searchText={searchText}
        onChangeHandler={handleSearchChange}
      />
      <CardList itemlist={filteredMonsters} />
    </div>
  );
};

export default App;
