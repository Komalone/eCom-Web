import { useState, useContext } from 'react';
import Cart from '../Cart/Cart';
import './Header.css';
import CartContext from '../../store/store-context';

const CartBtn=()=>{
    const cartCtx= useContext(CartContext);
    //const [cartItemLen, setCarItemLen]= useState(0);
    const [showCartbtn, setShow]=useState(false);
    const showCartHandler=()=>{
        setShow(true);
    }
    const hideCartHandler=()=>{
        setShow(false);
    }
    
    const quantity= cartCtx.items.length;

    return (
        <>
        <button className="cart-holder" onClick={showCartHandler}>
            Cart
            <span className='cart-number'>{quantity}</span>
        </button>
        {showCartbtn && <Cart onClose={hideCartHandler}/>}
        </>
    );
}
export default CartBtn;