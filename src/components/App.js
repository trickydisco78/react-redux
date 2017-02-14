// This component handles the App template used on every page

<<<<<<< HEAD
import React, { PropTypes } from "react";
import Header from "./common/header";
=======
import React, {PropTypes} from 'react';
import Header from './common/Header';
>>>>>>> 7a51ff05f6c43f222b4416aa9105ad3ad3604841

class App extends React.Component {
  constructor(props) {
    super(props);
     this.addNote = this.addNote.bind(this);
    this.state = {
      notes: [
        {id:1,
        task:'Tester'}
      ]
    };
  }
  addNote ()  {
    this.setState({
      notes:this.state.notes.concat([{
        id:2,
        task:'new task'
      }])
    });
  }
  render() {
<<<<<<< HEAD
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
=======
    const notes = this.state.notes;
    console.log(notes);

    return (
      <div className="container-fluid">
      <Header />
      {this.props.children}
      <button onClick={this.addNote}>+</button>
>>>>>>> 7a51ff05f6c43f222b4416aa9105ad3ad3604841
      </div>

    );
  }

}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
