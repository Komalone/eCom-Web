import { } from "react-bootstrap";
import './CartItem.css'


const CartItem=(props)=>{
    const removeid=(id)=>{
        console.log('id', id)
        
        props.onRemove(id);
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
            <input type="text" value={props.quantity}></input>
            <button onClick={()=>removeid(props.id)}>REMOVE</button>
            </span>
            </div>
        </div>
    );
}
export default CartItem;