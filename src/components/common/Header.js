import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
  
export default Header;