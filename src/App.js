import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  // ES7 class - no need for constructor
  state = {
    searchText: "",
    monsters: [],
  };

  componentDidMount() {
    //console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          }
        );
      });
  }

  handleSearchInputChange = (event) => {
    const searchText = event.target.value.toLocaleLowerCase();
    //console.log("handleSearchInputChange: " + searchText);
    this.setState(() => {
      return { searchText };
    });
  };

  render() {
    console.log("render from AppJS");

    const { monsters, searchText } = this.state;
    const { handleSearchInputChange } = this;

    const monstersFound = monsters.filter(
      (monster) => monster.name.toLocaleLowerCase().includes(searchText)
      // broader search using includes
    );

    

    return (
      <div className="App">

        <SearchBox placeHolder={"search monsters"} onChange={handleSearchInputChange} value={searchText} />
        <CardList items={monstersFound} />
      </div>
    );
  }
}

export default App;
