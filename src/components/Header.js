import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
  return (
    <div className="header_container">
      <Link className="title" to="/">Math Magicians</Link>
      <nav className="navbar">
        <Link className="link-styles" to="/">Home</Link>
        <Link className="link-styles" to="/calculator">Calculator</Link>
        <Link className="link-styles" to="/quotes">Quotes</Link>
        <Link className="link-styles" to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Header;
