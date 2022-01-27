import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const NavBar = () => {
  return (
    <nav className="containerNav">
      <ol className="list">
        <li>
          <NavLink className="link" to="/">
            Матчи
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/competitions">
            Соревнования
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};
