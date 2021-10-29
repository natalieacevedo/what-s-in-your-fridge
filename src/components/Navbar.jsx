import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="Header">
          <li>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/ingredientRoot">
              Ingredients
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/recipes">
              Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
