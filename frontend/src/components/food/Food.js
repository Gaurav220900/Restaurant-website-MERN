import React from "react";
import styles from "./Food.module.css";
import UpdateFood from '../../pages/UpdateFood';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Food = ({ id, name, price, image, desc }) => {
  const navigate = useNavigate();


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
        <button className={styles["add-btn"]}>+ Add to Cart</button>
        <button className = {styles["add-btnn"]} onClick = {()=>deleteFoodHandler(id)}> Delete </button>
        <button className={styles['add-btn']} style= {{top: '-34px'}} onClick= {()=> navigate(`/updateFood/${id}`)}  > Edit </button>
      </div>
      <div>
        
      </div>
    </li>
  );
};

export default Food;
