import React,{useState} from 'react';
import styles from './AddFoodForm.module.css';
import axios from 'axios';

const AddFoodForm = () => {
    const AddFood = () => {


        const [name,setName] = useState('');
        const [price,setPrice] = useState(0);
        const [image,setImage] = useState('');
        const [desc,setDesc] = useState('');
    
        async function formDataHandler(event) {
            event.preventDefault();
            const body = {
                name: name,
                price:price,
                image: image,
                desc: desc,
            };
    
            const res = await axios.post('http://localhost:4000/food',body);
            console.log(res); 
    
            setName('');
            setPrice("");
            setImage("");
            setDesc("");
    
           
           
    
        };
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
          <button>Create</button>
        </form>
      )
    }
    
}

export default AddFoodForm