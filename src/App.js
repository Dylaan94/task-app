// this is used for handling input field and logic

import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from './components/Overview'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: { text: "", id: uniqid() },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
    console.log(this.state.task.text);
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(
        this.state.task
      ) /* concatenates current tasks array with what is currently written in task*/,
      task: { text: '', id: uniqid() },
    });
  };

  render() {
    // destructured the state so its easier to work with
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label >
            add task
            <input
              type="text"
              id="taskInput"
              onChange={this.handleChange} /* sets the task state on change */
              value={
                this.state.task.text
              } /* we must set the value attribute in react so that it can be targeted, value updates as the input does */
            />
          </label>
          <button type="submit"> Submit </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
