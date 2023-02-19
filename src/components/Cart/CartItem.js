import { } from "react-bootstrap";
import './CartItem.css'

const CartItem=(props)=>{
    const removeid=(event)=>{
        event.preventDefault();
        const updatedId= props.id -1;
        props.onRemove(updatedId);
    }
    return (
        <div className="cart-items">
            <div className="cart-row" id={props.id}>
            <span className='cart-item cart-column'>
            <img className='cart-img' src={props.imageURL} alt=""/>
            <span>{props.name}</span>
            </span>
            <span className='cart-price cart-column'>{props.price}</span>
            <span className='cart-quantity cart-column'>
            <input type="text" value={props.amount}></input>
            <button onClick={removeid}>REMOVE</button>
            </span>
            </div>
        </div>
    );
}
export default CartItem;