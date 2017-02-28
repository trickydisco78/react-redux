// This component handles the App template used on every page

import React, { PropTypes } from "react";
import Header from "./common/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.state = {
      notes: [
        {
          id: 1,
          task: "Tester"
        }
      ]
    };
  }
  addNote() {
    this.setState({
      notes: this.state.notes.concat([
        {
          id: 2,
          task: "new task"
        }
      ])
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
        <button onClick={this.addNote}>+</button>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
