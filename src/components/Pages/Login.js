import { useContext } from 'react';
import {} from 'react-router-dom'
import Store from '../ProductStore/Store';
import Authentication from './Auth';
import AuthContext from "../../store/authContext";

const Login=()=>{
    const authCtx= useContext(AuthContext);
   
  console.log('aa', authCtx.isLoggedIn);
  return (
    <>
    
    {authCtx.isLoggedIn && <Store />
      }
    {!authCtx.isLoggedIn && <Authentication /> }
    </>
  );
}
export default Login;