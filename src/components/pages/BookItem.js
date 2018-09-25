import React, { Component } from 'react';
import { Button, Col, Row, Well } from "react-bootstrap";


class BookItem extends Component {
    render() {
        return (
            <div>

                <Well>
                    <Row>
                        <Col xs={12}>
                            <h6>{this.props.title}</h6>
                            <p>{this.props.description}</p>
                            <h6>usd. {this.props.price}</h6>
                            <Button bsStyle={'primary'}>Buy now</Button>
                        </Col>
                    </Row>
                </Well>


            </div>
        );
    }
}


export default BookItem;
