import "./App.css";
import { Component } from "react";

class App extends Component {
  // ES7 class - no need for constructor
  state = {
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

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
