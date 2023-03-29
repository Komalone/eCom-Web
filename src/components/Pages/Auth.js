import React, { useContext, useRef, useState } from 'react';
import { useHistory, 
    //useNavigate 
      } from 'react-router-dom';
      
//import CartContext from '../../store/store-context';
import AuthContext from '../../store/authContext';
import './Auth.css'

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(true);
  const [sendingReq,setSendingReq]=useState(false);

  const authctx=useContext(AuthContext);

  const emailInputRef=useRef();
  const passwordInputRef=useRef();

 const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler =(e)=>{
    e.preventDefault()
    setSendingReq(true);

    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    let url;
    if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDd1udW03Q6zC24ia2xKuVRtJQhevjXgvs'
    }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDd1udW03Q6zC24ia2xKuVRtJQhevjXgvs';
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        setSendingReq(false);
        if(res.ok){
            let data=res.json();
            (data).then((resp)=>{
              console.log(resp.email);
              localStorage.setItem('loginEmail', resp.email);
                authctx.login(resp.idToken);
                authctx.isLoggedIn=true;
                history.push('/Store');
            })
        }else{
            const data =res.json();
        data.then((data)=>{
            alert(data.error.message);
        })
        }
    })
  }


  return (
    <section>
    <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
    <form className='form' onSubmit={submitHandler}>
      <div className='control'>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' required ref={emailInputRef} />
      </div>
      <div className='control'>
        <label htmlFor='password'>Your Password</label>
        <input type='password' id='password' required ref={passwordInputRef} />
      </div>
      <div className='actions'>
        {sendingReq && <p>Sending Request...</p>}
       {!sendingReq && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
        <button
          type='button'
          className='toggle'
          onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>
    </form>
  </section>
  )
}

export default Authentication