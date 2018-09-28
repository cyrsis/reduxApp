
//Post a book
import Constant from "../constant";

export function postbooks(book) {
    return {
         type: Constant.POST_BOOK,
         payload:book
    }
}


//Delete a book
export function deletebooks (id) {
    return {
        type: Constant.DELETE_BOOK,
        payload:id
    }
}

//Update a book


export function updatebook(book) {
    return {
        type: Constant.UPDATE_BOOK,
        payload:book
    }
}

export function somebooks(book) {
    return {
        type: Constant.SOME_BOOK,
        payload: book
    }
}

export function getbooks() {
    return {
        type: Constant.GET_BOOKS,
    }
}
