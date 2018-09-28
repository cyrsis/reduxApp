import Constant from '../constant'

//Get
export function getCart() {
    return {
        type: Constant.GET_CART,
    }
}

//Add
export function addToCart(book) {
    return {
        type: Constant.ADD_TO_CART,
        payload: book

    }
}


//Update
export function updateCart(_id,unit) {
    return {
        type: Constant.UPDATE_CART,
        _id:_id,
        unit: unit
    }

}

//Delete
export function deleteCartItem(cart) {
    return {
        type: Constant.DELETE_CART_ITEM,
        payload: cart
    }
}
