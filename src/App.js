import "./App.css";
import { Component } from "react";

class App extends Component {
  // ES7 class - no need for constructor
  state = {
    searchText: "",
    monsters: [],
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  handleSearchInputChange = (event) => {
    const searchText = event.target.value.toLocaleLowerCase();
    console.log("handleSearchInputChange: " + searchText);
    this.setState(() => {
      return { searchText };
    });
  };

  render() {
    console.log("render");

    const { monsters, searchText } = this.state;
    const { handleSearchInputChange } = this;

    const monstersFound = monsters.filter(
      (monster) => monster.name.toLocaleLowerCase().includes(searchText)
      // broader search using includes
    );

    console.log("mf: ", monstersFound);
    const monstersFoundList = monstersFound.map((monster) => (
      <div key={monster.id}>
        <h1>{monster.name}</h1>
      </div>
    ));

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          value={searchText}
          onChange={handleSearchInputChange}
        />
        {monstersFoundList}
      </div>
    );
  }
}

export default App;
