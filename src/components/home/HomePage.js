import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
  render(){
    return (
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">Pluralsight Administration</h1>
          <p className="card-text">React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
          <Link to="/about" className="btn btn-primary">Learn More</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;