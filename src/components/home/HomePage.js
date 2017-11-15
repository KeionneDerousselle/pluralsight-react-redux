import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
  render(){
    return (
      <div className="jumbotron text-center">
        <h1 className="display-3">Pluralsight Administration</h1>
        <p className="lead">React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <hr className="my-4"/>
        <Link to="/about" className="btn btn-primary">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
