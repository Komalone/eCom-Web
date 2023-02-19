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
   
        return{
            items: updatedItem,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
    return state;
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