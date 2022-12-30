import "./App.css";
import { Component } from "react";

class App extends Component {
  // ES7 class - no need for constructor
  state = {
    monster1: { name: "Dracula" },
    monster2: { name: "Frankenstein" },
    monster3: { name: "Mummy" },
  };

  render() {
    return <div className="App">
      <h2>{this.state.monster1.name}</h2>
      <h2>{this.state.monster2.name}</h2>
      <h2>{this.state.monster3.name}</h2>
    </div>;
  }
}

export default App;
