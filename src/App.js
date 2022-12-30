import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {firstName: "Marco", lastname: "Polo"},
      occupation:"explorer"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello! My name is {this.state.name.firstName} {this.state.name.lastname} and I am an {this.state.occupation}. </p>
          <button
            onClick={() => {
              this.setState({name: {firstName:'John', lastname: 'Smith'}, occupation: 'explorer', born: 'c 1580 Lincolnshire, England'})
              console.log(this.state);
            }}
          >
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
