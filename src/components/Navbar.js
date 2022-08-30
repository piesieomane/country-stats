import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiTwotoneSetting, AiFillLeftSquare } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="nav">
      <AiFillLeftSquare />
      <NavLink to="/">CountriesPage</NavLink>
      <div>
        <FaMicrophone />
        <AiTwotoneSetting />
      </div>
    </div>
  );
};

export default Navbar;
