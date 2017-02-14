<<<<<<< HEAD
import React, { PropTypes } from "react";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.OnClickSave = this.OnClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  OnClickSave() {
    console.log(`Saving ${this.state.course.title}`);
  }
=======
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props,context) {
    super(props,context);

    this.state = {
      course: {title:""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }


onTitleChange(event){
  const course = this.state.course;
  course.title = event.target.value;
  this.setState({course:course});
}

onClickSave(event) {
  this.props.dispatch(courseActions.createCourse(this.state.course));
}

courseRow(course, index) {
  return <div key={index}>{course.title}</div>;
}
>>>>>>> 7a51ff05f6c43f222b4416aa9105ad3ad3604841
  render() {
    return (
      <div>
        <h1>Courses</h1>
<<<<<<< HEAD
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" onClick={this.OnClickSave} />

=======
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text"
        onChange={this.onTitleChange}
        value={this.state.course.title} />

        <input
        type="submit"
        value="Save"
        onClick={this.onClickSave} />
>>>>>>> 7a51ff05f6c43f222b4416aa9105ad3ad3604841
      </div>
    );
  }
}

<<<<<<< HEAD
export default CoursesPage;
=======
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}


export default connect(mapStateToProps)(CoursesPage);
>>>>>>> 7a51ff05f6c43f222b4416aa9105ad3ad3604841
