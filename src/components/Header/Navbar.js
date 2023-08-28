import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <ul className={props.className}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/new">New</NavLink>
      </li>
      <li>
        <NavLink to="popular">Popular</NavLink>
      </li>
      <li>
        <NavLink to="/trending">Trending</NavLink>
      </li>
      <li>
        <NavLink to="categories">Categories</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
