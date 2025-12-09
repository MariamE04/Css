import React from "react";
import { NavLink } from "react-router";
import styles from "./Header.module.css";
import Login from "../login/login";

const Header = ({ headers }) => {
  return (
    <div className={styles.header}>
        <nav>
        {headers.map((header, index) => (
          <NavLink
            key={index}
            to={header.url}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {header.title}

          </NavLink>
        ))}
        </nav>
        <Login />
    </div>
  );
};

export default Header;
