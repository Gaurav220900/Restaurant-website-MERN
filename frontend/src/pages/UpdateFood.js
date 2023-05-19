import React,{useState} from 'react';
import axios from 'axios';
import styles from '../components/Add-Food/AddFoodForm.module.css';
import { useParams } from 'react-router-dom';


const UpdateFood = (props) => {
    
    const params = useParams();
    

    const {id} = params;
    console.log(id);

    const res = axios.get(`http://localhost:4000/food/${id}`);

    const [name,setName] = useState(res.data.name);
    const [price,setPrice] = useState(res.data.price);
    const [image,setImage] = useState(res.data.image);
    const [desc,setDesc] = useState(res.data.desc);


  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const priceChangeHandler = (event) => {
      setPrice(event.target.value)
  };
  const imageChangeHandler = (event) => {
      setImage(event.target.value)
  };
  const descChangeHandler = (event) => {
      setDesc(event.target.value);
  };


    async function formDataHandler(event) {
      event.preventDefault();
      const body = {
          name: name,
          price:price,
          image: image,
          desc: desc,
      };

      const res = await axios.update(`http://localhost:4000/foods/${id}`,body);
      console.log(res); 

      setName('');
      setPrice("");
      setImage("");
      setDesc("");

      //navigate('/homepage');
  };
  return (
  <form onSubmit={formDataHandler} className={styles.form}>
  <div>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      onChange={nameChangeHandler}
      placeholder="Food Name"
      value={name}
    />
  </div>
  <div>
    <label htmlFor="Price">Price</label>
    <input
      type="number"
      id="price"
      onChange={priceChangeHandler}
      placeholder="Price"
      value={price}
    />
  </div>
  <div>
    <label htmlFor="img">Image Url</label>
    <input
      type="text"
      id="img"
      onChange={imageChangeHandler}
      placeholder="Image Url"
      value={image}
    />
  </div>
  <div>
    <label htmlFor="desc">Desc</label>
    <input
      type="text"
      id="desc"
      onChange={descChangeHandler}
      placeholder="Description"
      value={desc}
    />
  </div>
  <button>Update</button>
</form>
)
}

export default UpdateFood