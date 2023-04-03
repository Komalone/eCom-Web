import React, { 
    //useReducer,
    useState
} from "react";
import CartContext from "./store-context";
import axios from "axios"

const StoreProvider=(props)=>{
    const [items, setItem ]= useState([])
    
    const updatedTotalAmount = Number(items.price);

    
   
    const addToCartHandler= async(item)=>{

        // const updatedItems= items.concat(item);
        
    try{
        const emailUsed= localStorage.getItem('loginEmail')
        const loginEmail= emailUsed.replace(/[@.]/g, '');
        const response= await axios.post(`https://crudcrud.com/api/f15fa7b1aa6b458295da92b94e75dfd0/cart${loginEmail}`,(item))
        console.log(response);
        setItem([...items, response]);
    }catch(err){
        console.log(err);
    }
          
    };
    
    const removeFromCartHandler=async(id)=>{
        
        //const updatedItems = items.filter(item => item.id !== id);
        try{
            const emailUsed= localStorage.getItem('loginEmail')
        const loginEmail= emailUsed.replace(/[@.]/g, '');
        const abc =items.filter(item=> item.data._id !== id);
         await axios.delete(`https://crudcrud.com/api/f15fa7b1aa6b458295da92b94e75dfd0/cart${loginEmail}/${id}`)
          setItem([abc]);
        }catch(err){
            console.log(err);
        }
    };

    const cartContext = {
        items: items ,
        totalAmount: updatedTotalAmount,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler,
      };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
export default StoreProvider;