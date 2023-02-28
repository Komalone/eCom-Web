import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
/*
 React bootstrap config
 */
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './store/authContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
