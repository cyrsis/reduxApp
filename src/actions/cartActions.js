import constant from '../constant'

//Get
export function getCart() {
    return {
        type: constant.GET_CART,
    }
}

//Add
export function addToCart(book) {
    return {
        type: constant.ADD_TO_CART,
        payload: book

    }
}

//Update
export function updateCart(args) {
    return {
        type: constant.UPDATE_CART,
        payload: args
    }

//Delete
    export function deleteCartItem(cart) {
        return {
            type: constant.DELETE_CART_ITEM,
            payload: cart
        }
    }


}
