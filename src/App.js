import { render } from "@testing-library/react";
import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <form>
          <label>
            add task 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }

}

export default App;
