import React from 'react';
// import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Pluralsight Administration</h1>
          <p className="card-text">React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        </div>
        {/* <Link to="about" className="btn btn-primary btn-lg">Learn More</Link> */}
      </div>
    );
  }
}

export default HomePage;