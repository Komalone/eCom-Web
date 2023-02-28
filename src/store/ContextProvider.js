import React, { 
    //useReducer,
    useState
} from "react";
import CartContext from "./store-context";

const StoreProvider=(props)=>{
    const [items, setItem ]= useState([])
    
    const updatedTotalAmount = Number(items.price);
    
    const addToCartHandler=(item)=>{
        fetch('https://crudcrud.com/api/ba7f3aaf421d44f0bf990e95e4de49ea/addTocart', {
            method: 'POST',
            body: JSON.stringify( item ),
            headers: { 'Content-Type': 'application/json' }
        });
        //const updatedItems= axios.post(`https://crudcrud.com/api/79d6cf68c8cf4086bd2e133d02a6a9df/cartitem`, JSON.stringify(item))
       // const updatedItems= items.concat(item);
       console.log([...items, item]); 
       setItem([...items, item]);
        
    };
    
    const removeFromCartHandler=(id)=>{
        console.log(id);
        fetch(`https://crudcrud.com/api/ba7f3aaf421d44f0bf990e95e4de49ea/addTocart/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
          //const updatedItems = items.filter(item => item.id !== id);
          //const updatedItems= axios.delete(`https://crudcrud.com/api/4f6edc817d5142be9322bd7b657d767d/cartItem/}`,)
          setItem(id)
    };

    const cartContext = {
        items:items ,
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