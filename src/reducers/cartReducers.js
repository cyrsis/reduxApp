import constant from "../constant";

export function cartReducers(state = {cart: []}, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            // console.log("Add_to_cart call")
            return {cart: [...state.cart, ...action.payload]}
            break;

        case constant.DELETE_CART_ITEM:
            return {cart: [...state.cart, action.payload]}

            break;
        default:
            return state

    }
    return state
}




