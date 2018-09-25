
//Post a book
import constant from "../constant";

export function postbooks(book) {
    return {
         type: constant.POST_BOOK,
         payload:book
    }
}


//Delete a book
export function deletebooks (id) {
    return {
        type: constant.DELETE_BOOK,
        payload:id
    }
}

//Update a book


export function updatebook(book) {
    return {
        type: constant.UPDATE_BOOK,
        payload:book
    }
}

export function somebooks(book) {
    return {
        type: constant.SOME_BOOK,
        payload: book
    }
}

export function getbooks() {
    return {
        type: constant.GET_BOOKS,
    }
}
