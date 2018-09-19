import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';


//Step3
let reducer = function (state = [], action) {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload
            break;
        case "decrease":
            return state - action.payload;
        case "POST_BOOK":
            return state = action.payload;

            break;
    }
    return state
}


//Set 1

const store = createStore(reducer);


store.subscribe(function () {
    console.log(`Current state is `, store.getState())
})

//Steps 2
store.dispatch(
    {
        type: "POST_BOOK",
        payload: [{
            id: 1,
            title: 'this is a book title',
            description: "This is a book desc",
            price: 33.33
        },
            {
                id: 2,
                title: 'this is a book title 2',
                description: "This is a book desc 2",
                price: 33.22
            },

        ]
    }
)

// store.dispatch({type: "INCREMENT",payload: 1})
// store.dispatch({type: "INCREMENT",payload: 1})
// store.dispatch({type: "INCREMENT",payload: 1})
// store.dispatch({type: "decrease",payload:3})


class App extends Component {


    render() {
        return (
            <div className="App">
                <h1>hello there</h1>

            </div>
        );
    }
}

export default App;