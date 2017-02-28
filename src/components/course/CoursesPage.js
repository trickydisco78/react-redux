import React, { PropTypes } from "react";
// Connect container components to talk to the store
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
    // Always bind functions in the constructor. In render method they force a re render
    // Also could use ES7 property initializers which have auto binding
    //ES7 property initializers operate inside the class’ constructor, where this refers to the instance of the class under construction, 
    //so the initial state can still be made to depend on this.props. Notably, we no longer have to define prop defaults and the initial state object in terms of a getter function.
    // onTitleChange () => {}

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
    console.log("Course updated:" + this.state.course.title);
  }

  onClickSave(event) {
    //Prevent Enter key from refreshing page
    event.preventDefault();

    // Check for title value
    if (this.state.course.title != "") {
      // dispatch provided by connect() function
      // pass in action and data
      // Was this:
      // this.props.dispatch(courseActions.createCourse(this.state.course));

      // Now simplified by adding map function at the bottom to:
      this.props.actions.createCourse(this.state.course);

      console.log(this.state);
    }
  }
  // Course row function return courses
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    debugger;
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <form onSubmit={this.onClickSave}>
          <input
            type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title}
          />

          <input type="submit" value="Save" onClick={this.onClickSave} />
        </form>
      </div>
    );
  }
}
// Proptype Validation
CoursesPage.propTypes = {
  // dispatch validation not needed now we have mapDispatch to props function
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired
};

// Return properties we want exposed to component
// Accessing state in store
// ownProps is reference to props within component (Routing props
function mapStateToProps(state, ownProps) {
  return {
    //state.courses property is determined from property named in reducer
    courses: state.courses
  };
}

// This replaces dispatch action above:
//this.props.dispatch(courseActions.createCourse(this.state.course));
// wrap action in a call to dispatch (you can only dispatch actions)
function mapDispatchtoProps(dispatch) {
  return {
    // When createCourse is called dispatch this action with property
    //createCourse: course => dispatch(courseActions.createCourse(course))
    // simpler to use bindActionCreators from redux
    // bindActionCreators will go through course actions and find all actions and wrap them in a call to dispatch
    // Better this way as it allows you to manage actions in actions rather than making seperate course actions here
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// Connect is a higher order component wrap coursesPage
// Each is a function
// Connect will inject a dispatch property if  mapDispatchtoprops function is omitted
// mapDispatchtoProps -determines what actions are available in the component
// using mapDispatchtoProps function means connect no longer adds a dispatch property on the component
export default connect(mapStateToProps, mapDispatchtoProps)(CoursesPage);

// Components are supposed to be concerned only with displaying stuff. The only place they are supposed to get information is from their props.
// mapStatehtoProps allows you to extract props from the state and pass it to the component
// mapDispatchtoProps -  receives dispatch and props and is meant for you to bind action creators to dispatch so when you execute the resulting function the action gets disptached.
