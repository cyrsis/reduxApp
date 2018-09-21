
//Post a book
export function postbooks(book) {
    return {
         type:"POST_BOOK",
         payload:book
    }
}


//Delete a book
export function deletebooks (id) {
    return {
        type: "DELETE_BOOK",
        payload:id
    }
}

//Update a book


export function updatebook(book) {
    return {
        type: "UPDATE_BOOK",
        payload:book
    }
}
