import "./App.css";
import { Component } from "react";

class App extends Component {
  // ES7 class - no need for constructor
  state = {
    searchText: "",
    monsters: [],
  };

  componentDidMount() {
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

  /*

      { name: "Dracula", id: "123acde" },
      { name: "Frankenstein", id: "123wfwe" },
      { name: "Mummy", id: "123aeget" },
      { name: "Ghost", id: "1235rhb" },
*/

  handleSearchInputChange = (event) => {
    const newSearch = event.target.value;
    //console.log(event.target.value);
    this.setState((state) => {
      return { searchText: newSearch };
    });
  };

  render() {
    const searchMonsterName = this.state.searchText.toUpperCase();
    const monsterList = this.state.monsters;
    const monstersFound = monsterList.filter((monster) =>
      monster.name.toUpperCase().startsWith(searchMonsterName)
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
          value={this.state.searchText}
          onChange={(e) => this.handleSearchInputChange(e)}
        />
        <p>{this.state.searchText}</p>
        {monstersFoundList}
      </div>
    );
  }
}

export default App;
