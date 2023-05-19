import React,{useContext} from "react";
import CartContext from "../store/CartContext";
import styles from './Cart.module.css';

const Cart = () => {

  const {cart,decrementItem,incrementItem,removeItem} = useContext(CartContext);

  const totalAmount = cart.reduce((prev,curr) => prev+ curr.price*curr.qty,0);
  return (
    <ul className={styles.cart}>
      <li style={{textAlign:'center'}}>
        My-cart
      </li>
      {
        cart.map((item,idx) => {
            return (
                <li key={idx}>
                  <img src ={item.image} />
                  <p className={styles['item-name']}>{item.name}</p>
                  <p className={styles['item-name']}>{ item.name} <span className={styles['item-qty']}>x { item.qty}</span></p>
                  <p className={styles['item-price']}>Rs. {item.price}</p>
                  <p className={styles['item-desc']}>{item.desc}</p>
                  <button onClick={()=>decrementItem(item.id) }>-</button>
                  <button onClick={() => incrementItem(item.id)}>+</button>
                  <br>
                  </br>
                  <button onClick={()=>removeItem(item.id)} className={styles['remove-btn']}>remove</button>
            
                  <br>
                  </br>
                  <br>
                  </br>
              </li>
            )
        })
      }
       <li>Total: {totalAmount} <span className={styles['place-order-btn']}><button>Place Order</button></span> </li>
    </ul>
  );
};

export default Cart;
