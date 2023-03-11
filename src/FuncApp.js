import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const FuncApp = () => {
  const [searchText, setSearchText] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChangeHandler = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase();
    setSearchText(searchValue);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  
    useEffect(()=>{
      const monstersFound = monsters.filter(
        (monster) => monster.name.toLocaleLowerCase().includes(searchText)
      );
      setFilteredMonsters(monstersFound);
    },[monsters,searchText]);

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChangeHandler}
        value={searchText}
      />
      <CardList items={filteredMonsters} />
    </div>
  );
};

export default FuncApp;
