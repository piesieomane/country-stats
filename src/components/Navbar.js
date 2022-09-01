import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting, AiFillLeftSquare } from 'react-icons/ai';
import '../styles/navbar.scss';

const Navbar = () => {
  return (
    <header className="nav_bar">
      <div className="nav_left">
        <NavLink to="/">
          <AiFillLeftSquare />
        </NavLink>
      </div>
      <h2>STATS OF COUNTRIES</h2>
      <div className="nav_right">
        <FaMicrophone />
        <AiTwotoneSetting />
      </div>
    </header>
  );
};

export default Navbar;
