    export function cartReducers(state = {cart: []}, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Add_to_cart call")
            return {cart: [...state.cart, action.payload]}

            break;

    }
    return state
}
