import React, { Component } from 'react';
import { connect } from "react-redux";
import { Panel, Col, Well, Button } from 'react-bootstrap';


class Cart extends Component {


    render() {
        
        if (this.props.cart[0]) {
            return this.renderCart();
        } else {
            return this.renderEmptyCart();
        }

        return (
            <div>

            </div>

        )
            ;
    }
}

function mapStateToProps(state) { //Just like the store.subscribe method
    return {
        books: state.books.books //key, value
    }

}

function mapDispatchToProps(dispatch) { //Just like the store.subscribe method
    return bindActionCreators({
        getBook: getbooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
