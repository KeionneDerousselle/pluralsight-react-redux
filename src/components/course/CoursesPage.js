import React from 'React';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
  };

  redirectToAddCoursePage = () => {
    this.props.history.push('/course');
  };

  render() {
    const {courses} = this.props;

    return(
      <div>
        <h1 className="mb-4">Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary float-md-right mb-3"
          onClick={this.redirectToAddCoursePage}/>
          <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
