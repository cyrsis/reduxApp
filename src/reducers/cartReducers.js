import Constant from "../constant";

export function cartReducers(state = {cart: []}, action) {
    switch (action.type) {

        case Constant.GET_CART:
            return {
                ...state,
                cart: action.payload
            }

            break;
        case "ADD_TO_CART":
            // console.log("Add_to_cart call")
            return {
                ...state,
                cart: action.payload
            }
            break;

        case Constant.UPDATE_CART:
            return {
                ...state,
                cart: action.payload
            }

            break;

        case Constant.DELETE_CART_ITEM:
            return {
                ...state,
                cart: action.payload
            }
            break;


        default:
            return state

    }
    return state
}




