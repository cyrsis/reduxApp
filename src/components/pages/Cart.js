import React, { Component } from 'react';
import { connect } from "react-redux";
import { Panel, Col, Well, Button, Row, Label, ButtonGroup } from 'react-bootstrap';
import { bindActionCreators } from "redux";
import { deleteCartItem } from "../../actions/cartActions";


class Cart extends Component {


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
                            <h6> qty. <Label bsStyle={"sucess"}></Label></h6>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{minWidth: '300px'}}>
                                <Button bsStyle={"default"} bsSize={"small"}>-</Button>
                                <Button bsStyle={"default"} bsSize={"small"}>+</Button>
                                <span>     </span>
                                <Button bsStyle={"danger"} bsSize={"small"}>delete</Button>
                            </ButtonGroup>

                        </Col>

                    </Row>
                </Panel>);
        })

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
        _deleteCartItem :deleteCartItem,

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
