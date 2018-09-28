import React, { Component } from 'react';
import { Button, Col, Row, Well } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../../actions/cartActions";


class BookItem extends Component {


    handleCart = () => {

        const book = [...this.props._cart, {
            _id: this.props._id,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price

        }]
        this.props._addToCart(book)

    }

    render() {
        return (
            <div>

                <Well>
                    <Row>
                        <Col xs={12}>
                            <h6>{this.props.title}</h6>
                            <p>{this.props.description}</p>
                            <h6>usd. {this.props.price}</h6>
                            <Button onClick={this.handleCart.bind(this)} bsStyle={'primary'}>Buy now</Button>
                        </Col>
                    </Row>
                </Well>


            </div>
        );
    }
}

function mapDispatchToProps(dispatch) { //Just like the store.subscribe method
    return bindActionCreators({
        _addToCart: addToCart
    }, dispatch)
}

function mapStateToProps(state) { //Just like the store.subscribe method
    return {
        _cart: state.cart.cart//key, value
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
