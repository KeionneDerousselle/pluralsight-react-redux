import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';

class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/courses" component={CoursesPage}/>
            <Route exact path="/course/" component={ManageCoursePage} />
            <Route exact path="/course/:id" component={ManageCoursePage} />
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
