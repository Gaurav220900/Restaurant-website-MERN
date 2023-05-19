import React from "react";
import Food from "../food/Food";
import styles from "./FoodList.module.css";

const FoodList = ({ foods }) => {
  return (
    <ul className={styles.list}>
      {foods.map((food) => {
        return (
          <Food
            key={food._id}
            id={food._id}
            name={food.name}
            price={food.price}
            image={food.image}
            desc={food.desc}
          />
        );
      })}
    </ul>
  );
};

export default FoodList;
