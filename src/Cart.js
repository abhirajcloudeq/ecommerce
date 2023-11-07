import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
const CartContext = createContext();
const intialState = {
cart:[],
orders: []
}
const CartProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , intialState)
    return (<CartContext.Provider value={{state,dispatch}}> 
        {children}
    </CartContext.Provider>
);
}
const useCartContext = ()=> {
    return useContext(CartContext)
}
export  {CartProvider,useCartContext}; 
