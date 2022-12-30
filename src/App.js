import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  // ES7 class - no need for constructor
  state = {
    name: { firstName: "Marco", lastname: "Polo" },
    occupation: "explorer",
  };

  handleButtonClick = () => {
    // ES7 function to keep this keyword correct
    this.setState(
      () => {
        // can use (state, props)
        return {
          name: { firstName: "John", lastName: "Smith" },
          occupation: "explorer",
        };
      },
      () => {
        // optional callback used after state updates
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello! My name is {this.state.name.firstName}{" "}
            {this.state.name.lastname} and I am an {this.state.occupation}.{" "}
          </p>
          <button onClick={this.handleButtonClick}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
