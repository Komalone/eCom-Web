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

    const emailUsed= localStorage.getItem('loginEmail')
        const loginEmail= emailUsed.replace(/[@.]/g, '');

useEffect(()=>{
    
    axios.get(`https://crudcrud.com/api/f15fa7b1aa6b458295da92b94e75dfd0/cart${loginEmail}`)
    .then((ele) => {
        setCartData(ele.data);
        console.log(ele.data)

        const totalPrice=  ele.data.reduce((acc,curritem)=>{
            return acc+curritem.price;
        },0)
        setTotalAmount(totalPrice);
});

},[props.onClose, loginEmail]);

    const removeItemHandler=(id)=>{
        cartCtx.removeItem(id);
       const abc= cartCtx.items.filter(item=> item.data._id !== id);
       console.log("while remove",abc) 
    }
    const cartItems= (
        cartData.map((item)=>(
            <CartItem
            id={item._id}
            name={item.name}
            imageURL={item.imageURL}
            price={item.price}
            quantity={item.quantity}
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