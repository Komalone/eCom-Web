import { useContext} from 'react';
import { } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import CartBtn from './CartBtn';
import AuthContext from '../../store/authContext';

const Hearder=()=>{
    const authCtx= useContext(AuthContext);
    const pageShown= authCtx.isLoggedIn;
    console.log(pageShown);
    // const logoutBtn=()=>{
    //     authCtx.logout();
    //     authCtx.isLoggedIn=false
    // }
    // const loginBtn=()=>{
    //     console.log('aa')
    //     authCtx.isLoggedIn=true;
    // }

return(
    <div id='EcommerceContainer'>
        <header>
            <nav>
            <ul className='header'>
                <li><NavLink to="/Home" >HOME</NavLink></li>
                <li><NavLink to="/Store" >STORE</NavLink></li>
                <li><NavLink to="/About">ABOUT</NavLink></li>
                {pageShown && <li><NavLink to='/ContactUs'>Contact us</NavLink></li>}
                 {!pageShown &&<li><NavLink to='/Auth' >LogIn</NavLink></li>}
                {pageShown &&<li><NavLink to="/Auth" onClick={authCtx.logout}>LogOut</NavLink></li>}
                {pageShown && <NavLink to='/Store' ><CartBtn/></NavLink>}
            </ul>
            </nav>
            <h1>The Generics</h1>
        </header>
    </div>
);
}
export default Hearder