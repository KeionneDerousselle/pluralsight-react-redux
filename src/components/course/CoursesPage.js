import React from 'React';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course: {title: ""}
    };
  };

  onTitleChange = event =>
  {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  };

  onClickSave = () => {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  };

  courseRow = (course, index) => {
    return <div key={index}>{course.title}</div>
  };

  render() {
    return(
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCourseName">Name</label>
              <input id="inputCourseName"
                     className="form-control"
                     type="text"
                     value={this.state.course.title}
                     onChange={this.onTitleChange}
                     placeholder="Course Name"/>
            </div>
          </div>
          <button type="submit"
                  className="btn btn-primary"
                  onClick={this.onClickSave}>Save</button>
        </form>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateToProps)(CoursesPage);
