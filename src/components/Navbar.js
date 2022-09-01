import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting, AiFillLeftSquare } from 'react-icons/ai';

const Navbar = () => {
  return (
    <header>
      <div className="nav">
        <NavLink to="/">
          <AiFillLeftSquare />
        </NavLink>
        <h2>STATS OF COUNTRIES</h2>
        <div>
          <FaMicrophone />
          <AiTwotoneSetting />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
