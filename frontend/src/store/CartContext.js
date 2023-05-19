import React,{createContext, useState,useEffect} from 'react'
import axios from 'axios';

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart: ()=> { },
    clearCart:()=>{ },
    incrementItem: (itemId) => { },
    decrementItem: (itemId) => { },
    removeItem:(itemId)=>{},
    
});



export const CartContextProvider = (props) => {


    const initialItems = JSON.parse(window.localStorage.getItem('cart') || '[]');

    const [cart,setCart] = useState(initialItems);

   
    const addToCart = (item) => {
        setCart((prevState) => {
            return [...prevState,item];
        })
    }

    const decrementItem = (itemId) => {
        setCart((prevState)=>{
            return prevState.map((cartItem) => cartItem.id === itemId ? { ...cartItem, qty: parseInt(cartItem.qty) <=1 ? 1 : parseInt(cartItem.qty) - 1 } : cartItem);
        })
    }

    const incrementItem = (itemId) => {
        setCart((prevState) => {
            return prevState.map((item) => item.id === itemId ? {...item,qty: parseInt(item.qty)+1} : item);
        })
    }

    const removeItem = (itemId) => {
        setCart((prevState) => {
            return prevState.filter((item) => item.id !== itemId)
        })
    }

    const clearCart = () => {
        setCart(() => []);
    }


    const context = {
        cart : cart,
        cartLength: cart.length,
        addToCart: addToCart,
        clearCart: clearCart,
        incrementItem: incrementItem,
        decrementItem: decrementItem,
        removeItem: removeItem,
    }

    useEffect(() => {
        window.localStorage.setItem('cart',JSON.stringify(cart));
    }, [cart]);




    return <CartContext.Provider value = {context}>
        {props.children}
    </CartContext.Provider>



} 

export default CartContext;