import React, { Component } from 'react';
import { connect } from "react-redux";
import { Panel, Col, Well, Button, Row, Label, ButtonGroup } from 'react-bootstrap';
import { bindActionCreators } from "redux";
import { deleteCartItem, getCart, updateCart } from "../../actions/cartActions";


class Cart extends Component {

    onDelete = (_id) => {
        const currentBookToDelete = this.props._cart

        const indexToDelete = currentBookToDelete.findIndex(
            function (cart) {
                return cart._id === _id;
            }
        )

        // console.log(...currentBookToDelete.slice(0, indexToDelete));
        // console.log(...currentBookToDelete.slice(indexToDelete + 1));

        //Same as concat
        let cartAfterDelete = [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]


        this.props._deleteCartItem(cartAfterDelete);

    }

    onIncreament = (_id) => {
        this.props._updateCart(_id,1)
    }

    onDecreament = (_id) => {
        this.props._updateCart(_id,-1)
    }


    render() {

        if (this.props._cart[0]) {
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

    renderEmptyCart() {
        return (<div>

        </div>);
    }

    renderCart() {

        const cartItemList = this.props._cart.map(function (cartArr) {
            return (
                <Panel key={cartArr._id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{cartArr.title}</h6><span>    </span>
                        </Col>

                        <Col xs={12} sm={2}>
                            <h6> usd.{cartArr.price}</h6>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6> qty. <Label bsStyle={"success"}>{cartArr.quantity}</Label></h6>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{minWidth: '300px'}}>
                                <Button bsStyle={"default"} bsSize={"small"} onClick={this.onDecreament.bind(this,cartArr._id)}>-</Button>
                                <Button bsStyle={"default"} bsSize={"small"} onClick={this.onIncreament.bind(this,cartArr._id)}>+</Button>
                                <span>     </span>
                                <Button bsStyle={"danger"} bsSize={"small"}
                                        onClick={this.onDelete.bind(this, cartArr._id)}>delete</Button>
                            </ButtonGroup>

                        </Col>

                    </Row>
                </Panel>);
        },this)

        return (
            <Panel header="Cart" bsStyle={"primary"}>
                <h1>Cart Working?</h1>
                {cartItemList}
            </Panel>
        );
    }
}

function mapStateToProps(state) { //Just like the store.subscribe method
    return {
        _cart: state.cart.cart  //key, value
    }

}

function mapDispatchToProps(dispatch) { //Just like the store.subscribe method
    return bindActionCreators({
        _deleteCartItem: deleteCartItem,
        _updateCart: updateCart,
        _getCart: getCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
