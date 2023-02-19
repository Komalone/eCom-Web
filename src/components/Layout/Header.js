import { useContext, useState} from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';
import CartContext from '../../store/store-context';

const Hearder=(props)=>{
    const cartCtx= useContext(CartContext)
    const [showCartbtn, setShow]=useState(true);
    const showCartbtnHandler=()=>{
        setShow(true);
    }

    let quantity=0;
    cartCtx.items.forEach((item)=>{
        quantity= quantity + Number(item.quantity)
    });

return(
    <div id='EcommerceContainer'>
        <header>
            <nav>
            <ul className='header'>
                <li><NavLink to="/Home" >HOME</NavLink></li>
                <li><NavLink to="/Store" onClick={showCartbtnHandler}>STORE</NavLink></li>
                <li><NavLink to="/About">ABOUT</NavLink></li>
                <li><NavLink to='/ContactUs'>Contact us</NavLink></li>
                <li><NavLink to='/Auth'>LogIn</NavLink></li>
                {showCartbtn && <NavLink to='/Store' className="cart-holder" onClick={props.onShowCart}>
                Cart <span className='cart-number'>{quantity}</span></NavLink>}
            </ul>
            </nav>
            <h1>The Generics</h1>
        </header>
    </div>
);
}
export default Hearder