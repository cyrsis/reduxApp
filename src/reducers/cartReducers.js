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

            const currentBookToUpdate = [...state.cart]

            const indexToUpdate = currentBookToUpdate.findIndex(
                function (book) {
                    return book._id === action._id
                }
            )

            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
            }


            let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]

            return {
                ...state,
                cart: cartUpdate
            }

            break;

        case
        Constant.DELETE_CART_ITEM
        :
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




