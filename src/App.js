import React, { useContext} from 'react';
import { Redirect, Route, Switch} from 'react-router-dom'
import './App.css';
//import Store from './components/Pages/Store';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Footer from './components/Layout/Footer';
import Hearder from './components/Layout/Header';
import StoreProvider from './store/ContextProvider'
import ContactUs from './components/Pages/Contact';
import Authentication from './components/Pages/Auth';
import Login from './components/Pages/Login';
import AuthContext from './store/authContext';
//import SingleProduct from './components/Pages/Product';


let App = ()=> {
  const authCtx= useContext(AuthContext);
 
  return (
    <>
<StoreProvider>
  <Hearder/>
  <Switch>
    <Route path='/' exact ><Redirect to='/Home'/></Route>
    <Route path='/Home'><Home/></Route>
    <Route path='/About'><About/></Route>
    <Route path='/Store'>
      <Login />
      </Route>
    <Route path='/ContactUs'><ContactUs/></Route>
    
    {!authCtx.isLoggedIn && <Route path='/Auth'><Authentication/></Route>}
  </Switch>
  <Footer/>
</StoreProvider>   
</>
  );
}

export default App;
