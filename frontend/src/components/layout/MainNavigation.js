import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import CartButton from "../UI/CartButtton";

const MainNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/homepage">Foods</Link>
        </li>
        <li>
          <Link to="/addFood">Add-Food</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
