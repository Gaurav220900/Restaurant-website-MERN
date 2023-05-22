import React,{useContext} from "react";
import styles from "./Food.module.css";
import UpdateFood from '../../pages/UpdateFood';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CartContext from "../../store/CartContext";
import AuthContext from "../../store/AuthContext";

const Food = ({ id, name, price, image, desc }) => {
  const navigate = useNavigate();

  const {isLoggedIn} = useContext(AuthContext)
  const {addToCart} = useContext(CartContext);

  const addToCartHandler = () => {
    addToCart({
      id:id,
      name: name,
      price: price,
      image: image,
      desc: desc,
      qty: 1,
    });
  }


  const deleteFoodHandler = (id) => {
      const res = axios.delete(`http://localhost:4000/foods/${id}`);
      navigate('/homepage');
  }
 
  return (
    <li className={styles.food}>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>Rs .{price}</h4>
        <h4>{desc}</h4>
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" min="1" defaultValue={1} />
        <button className={styles["add-btn"]} onClick={addToCartHandler}>+ Add to Cart</button>
        {isLoggedIn && isLoggedIn.userType && isLoggedIn.userType === 'retailer' && 
        <button className = {styles["add-btnn"]} onClick = {()=>deleteFoodHandler(id)}> Delete </button>
        }
        { isLoggedIn && isLoggedIn.userType && isLoggedIn.userType === 'retailer' &&
        <button className={styles['add-btn']} style= {{top: '-34px'}} onClick= {()=> navigate(`/updateFood/${id}`)}  > Edit </button>
        }
      </div>
      <div>
        
      </div>
    </li>
  );
};

export default Food;
