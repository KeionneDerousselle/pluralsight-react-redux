import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  }

  updateCourseState = event => {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  };

  saveCourse = event => {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
  };

  render(){
    return (
      <CourseForm
        allAuthors={this.props.authors}
        course={this.state.course}
        errors={this.state.errors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        errors={this.state.errors}/>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
  const formattedAuthors = state.authors.map(author => {
    return{
      value: author.id,
      text: `${author.firstName} ${author.lastName}`
    };
  });

  return{
    course: course,
    authors: formattedAuthors
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
