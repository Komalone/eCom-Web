import React, { useReducer } from "react";
import CartContext from "./store-context";

const defaultState={
    items:[],
    totalAmount:0
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updatedTotalAmount=state.totalAmount + action.item.price;
        const updatedItem= state.items.concat(action.item);

        const existingCartItemIndex=state.items.findIndex(
            (item)=>item.id===action.item.id
        );
        
        console.log(existingCartItemIndex);

        return{
            items: updatedItem,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingCartItem= state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem=state.items[existingCartItem];
        let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
      console.log(updatedItems);
    } 
    return{
        items: updatedItems, 
    }
        
    }
return defaultState;
};

const StoreProvider=(props)=>{
    const [cartState, dispatchAction] = useReducer(
        cartReducer,defaultState);
    
    const addToCartHandler=(item)=>{
        dispatchAction({type: 'ADD', item: item});
    };
    
    const removeFromCartHandler=(id)=>{
        dispatchAction({type:'REMOVE', id:id});
    }
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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