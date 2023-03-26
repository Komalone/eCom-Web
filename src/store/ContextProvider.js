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
        
    try{
        const response= await axios.post(`https://crudcrud.com/api/683aa219ce5a4edc8387c61b124ddc17/addTocart`,(item))
        console.log(response);
        setItem([...items, response]);
    }catch(err){
        console.log(err);
    }
          
    };
    
    const removeFromCartHandler=async(id)=>{
        
        //const updatedItems = items.filter(item => item.id !== id);
        try{
         await axios.delete(`https://crudcrud.com/api/683aa219ce5a4edc8387c61b124ddc17/addTocart/${id}`)
          setItem([...items]);
        }catch(err){
            console.log(err);
        }
    };

    const cartContext = {
        items: [...items] ,
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