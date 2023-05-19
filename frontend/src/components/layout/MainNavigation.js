import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import CartButton from "../UI/CartButtton";
import CartContext from "../../store/CartContext";
import AuthContext from "../../store/AuthContext";
import { FiShoppingCart } from "react-icons/fi";

const MainNavigation = () => {


  const {cartLength} = useContext(CartContext);
  const {isLoggedIn} = useContext(AuthContext);
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
          <Link to="/cart"> <FiShoppingCart /><sup>{cartLength}</sup></Link>
        </li>
        { !isLoggedIn && 
        <li>
         <Link to='/login'>signIn</Link>
        </li>
        }
        {
          !isLoggedIn && 
          <li>
              <Link to='/signUp'>signUp</Link>
          </li>
        }
      </ul>
    </nav>
  );
};

export default MainNavigation;
