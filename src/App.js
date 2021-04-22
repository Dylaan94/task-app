// this is used for handling input field and logic

import { render } from "@testing-library/react";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: { name: "" },
      tasks: ["testTask"],
    };
  }

  addTask() {
    this.setState({
      tasks: ["added"]
    })
  }

  render() {
    return (
      <div>
        {this.state.tasks}
        <form>
          <label>
            add task
            <input type="text" name="task" />
          </label>
          <button onClick={() => this.addTask()}> Submit </button>
        </form>
      </div>
    );
  }
}

export default App;
