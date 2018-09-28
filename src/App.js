import React, { Component } from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/reducerIndex';
import { addToCart } from "./actions/cartActions";
import { updatebook } from "./actions/booksActions";
import logger from 'redux-logger';
import Bookslist from "./components/pages/Bookslist";
import { Provider } from "react-redux";


//Step 1


const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);
//Use logger instead of subscribe
// store.subscribe(function () {
//     console.log(`Current state is `, store.getState())
// })


// store.dispatch(postbooks(
//     [
//         {
//             id: 1,
//             title: 'this is a book title',
//             description: "This is a book desc",
//             price: 33.11
//         },
//         {
//             id: 2,
//             title: 'this is a book title 2',
//             description: "This is a book desc 2",
//             price: 33.22
//         },
//     ]
// ))

// store.dispatch(updatebook({
//     id: 2,
//     title: "Book2 Updated Title"
// }))

//store.dispatch(deletebooks({id: 2}))

//Steps 2
// store.dispatch(
//     {
//         type: "POST_BOOK",
//         payload: [{
//             id: 1,
//             title: 'this is a book title',
//             description: "This is a book desc",
//             price: 33.11
//         },
//             {
//                 id: 2,
//                 title: 'this is a book title 2',
//                 description: "This is a book desc 2",
//                 price: 33.22
//             },
//
//         ]
//     }
// )


// store.dispatch({
//     type: "UPDATE_BOOK", payload: {
//         id: 3,
//         title: "Book2 Updated Title"
//
//     }
// })

// store.dispatch({type: "DELETE_BOOK", payload: {id: 2}})
// store.dispatch({type: "INCREMENT",payload: 1})
// store.dispatch({type: "INCREMENT",payload: 1})
// store.dispatch({type: "INCREMENT",payload: 1})
// store.dispatch({type: "decrease",payload:3})

// Cart action
//store.dispatch(addToCart([{id: 1}]))


class App extends Component {


    render() {
        return (

            <Provider store={store}>
                <div className="App">
                    <Bookslist/>

                </div>
            </Provider>
        );
    }
}

export default App;
