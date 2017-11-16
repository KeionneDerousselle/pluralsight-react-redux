import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';
import IndeterminateCircleLoader from './common/IndeterminateCircleLoader';

class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      loading: props.loading
    };
  }

  componentWillReceiveProps = nextProps => {
    if(this.props.loading != nextProps.loading){
      this.setState({loading: nextProps.loading});
    }
  };

  render(){
    return (
      <div>
        <Header />
        <div className="container">
          {this.state.loading ? <IndeterminateCircleLoader /> : 
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/courses" component={CoursesPage}/>
            <Route exact path="/course/" component={ManageCoursePage} />
            <Route exact path="/course/:id" component={ManageCoursePage} />
            <Route exact path="/" component={HomePage}/>
          </Switch>
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    loading: state.ajaxStatus.reads > 0
  };
};

export default connect(mapStateToProps)(App);
