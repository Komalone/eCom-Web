import React, { 
    useContext
 } from 'react';
import CartContext from '../../store/store-context';
import './Store.css'

const StoreItem=(props)=>{
    const cartCtx=useContext(CartContext);

  const addToCartHandler=(event)=>{
    event.preventDefault();
    console.log("add item")

    cartCtx.addItem({
      id:props.id,
      name:props.name,
      price:props.price,
      imageURL:props.imageURL,
      quantity:props.quantity
    });
  }
  
    return (
        <div className='album' id={props.id}>
            <h3>{props.name}</h3>
            <div className="image-container">
                <img className="prod-images" src={props.imageURL} alt=""/>
            </div>
            <div className="prod-details">
                <span>Rs <span>{props.price}</span></span>
                <button className="shop-item-button" type='button' onClick={addToCartHandler}>ADD TO CART</button>
            </div>
        </div>
    );
};
export default StoreItem