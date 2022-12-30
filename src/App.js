import "./App.css";
import { Component } from "react";

class App extends Component {
  // ES7 class - no need for constructor
  state = {
    monsters: [
      { name: "Dracula" },
      { name: "Frankenstein" },
      { name: "Mummy" },
      { name: "Ghost" },
    ],
  };

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
