import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

class App extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;