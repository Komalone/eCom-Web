import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/store-context';
import Modal from '../Layout/Modal';
import './Cart.css';
import CartItem from './CartItem';

const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
    const [cartData, setCartData]= useState([]);
    const [totalAmount, setTotalAmount]= useState(0);

useEffect(()=>{

    fetch('https://crudcrud.com/api/9dc169aec764414599ab6dfafd3c6998/addTocart', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        return res.json();
    }).then((data) => {
        setCartData(data);

        const totalPrice=  data.reduce((acc,curritem)=>{
            return acc+curritem.item.price;
        },0)
        setTotalAmount(totalPrice);
});

},[props.onClose]);
   
    

    // const removeItemHandler=(id)=>{
    //     cartCtx.removeItem(id);
    // }
    const cartItems= (
        cartData.map((item)=>(
            <CartItem
            key={item._id + item.id}
            id={item.id}
            name={item.name}
            imageURL={item.imageURL}
            price={item.price}
            quantity={1}
            onRemove={cartCtx.removeItem(item._id)}/>
        ))
    );
    console.log(cartItems);
    

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
                        </span><span id='total-value'>{totalAmount}</span>
                </span>
            </div>
            <button className='purchase-btn' type='button'>PURCHASE</button>
        </Modal>
    );
}
export default Cart;