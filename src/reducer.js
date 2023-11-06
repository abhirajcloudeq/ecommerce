
const reducer = (state,action) => {
    console.log("ACTION", action)
    if(action.type == "addToCart"){
        return {...state, "cart":[action.payload, ...state.cart]}
    }
    if(action.type == "addToOrders"){
        return {...state, "orders": [...state.orders, action.payload]}
    }
}

export default reducer
