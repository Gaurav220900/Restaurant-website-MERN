import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import FoodList from "../components/foodlist/FoodList";

const Homepage = () => {
  const [foods, setFood] = useState([]);

  useEffect(() => {
    async function getFoodList() {
      try {
        const res = await axios.get("http://localhost:4000/foods");
        if (res.status !== 200) {
          throw new Error("Something went wrong");
        }
        setFood(() => res.data);
      } catch (err) {
        console.log(err);
      }
    }

    getFoodList();
  }, []);

  return (
    <Fragment>
      <FoodList foods={foods} />
    </Fragment>
  );
};

export default Homepage;
