import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/store-context';
import Modal from '../Layout/Modal';
import './Cart.css';
import CartItem from './CartItem';
import axios from "axios";

const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const [cartData, setCartData]= useState([]);
    const [totalAmount, setTotalAmount]= useState(0);

useEffect(()=>{
    
    axios.get('https://crudcrud.com/api/683aa219ce5a4edc8387c61b124ddc17/addTocart')
    .then((ele) => {
        setCartData(ele.data);
        console.log(ele.data)

        const totalPrice=  ele.data.reduce((acc,curritem)=>{
            return acc+curritem.price;
        },0)
        setTotalAmount(totalPrice);
});

},[props.onClose]);
   
    

    const removeItemHandler=(id)=>{
        cartCtx.removeItem(id);
        console.log(cartCtx.items.filter(item=> item.id !== id))
    }
    const cartItems= (
        cartData.map((item)=>(
            <CartItem
            key={item._id}
            id={item._id}
            name={item.name}
            imageURL={item.imageURL}
            price={item.price}
            quantity={1}
            onRemove={removeItemHandler}/>
        ))
    );
    

    return (
        <Modal id="cart" className="container">
            <h2>CART</h2>
            <button className="cancel" onClick={props.onClose}>X</button>
            <div className="cart-row cart-header">
                <span className='cart-item cart-column'>ITEM</span>
                <span className='cart-price cart-column'>PRICE</span>
                <span className='cart-quantity cart-column'>QUANTITY</span>
            </div>
            {cartItems}
            <div className="cart-total">
                <span>
                    <span className='total-title'> <strong>Total</strong>
                        </span><span id='total-value'>$ {totalAmount}</span>
                </span>
            </div>
            <button className='purchase-btn' type='button'>PURCHASE</button>
        </Modal>
    );
}
export default Cart;