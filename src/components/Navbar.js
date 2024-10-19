import React from 'react';
import './Navbar.css'; // Optional: create a CSS file for styles
import Essay from './Essay';
import { essays } from './Essays'; // Import essays data
import Home from './Home';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">home</a></li>
       
        <li><a href="/about">about</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
