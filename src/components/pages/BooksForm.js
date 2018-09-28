import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup, Panel, Well } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { findDOMNode } from 'react-dom'; //A way to use ref
import { postbooks } from "../../actions/booksActions";


class BooksForm extends Component {
    handleSubmit = () => {
        const book = [
            {
                //No id, because we want MongoDB give me the ID
                title: findDOMNode(this.refs.title).value,
                description: findDOMNode(this.refs.description).value,
                price: findDOMNode(this.refs.price).value,
            }
        ]

        this.props._postBooks(book)
    }


    render() {
        return (
            <div>
                <Well>
                    <Panel>
                        <FormGroup controlId="title">
                            <ControlLabel>Title</ControlLabel>
                            <FormControl type="text" placeholder={"Enter Title"} ref="title"></FormControl>
                        </FormGroup>
                        <FormGroup controlId="description">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl type="text" placeholder={"Enter Description"} ref="description"></FormControl>
                        </FormGroup>
                        <FormGroup controlId="price">
                            <ControlLabel>Price</ControlLabel>
                            <FormControl type="text" placeholder={"Enter Price"} ref="price"></FormControl>
                        </FormGroup>

                        <Button onClick={this.handleSubmit.bind(this)} bsStyle={"primary"}>Save</Button>
                    </Panel>
                </Well>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) { //Just like the store.subscribe method
    return bindActionCreators({
        _postBooks: postbooks
    }, dispatch)
}


export default connect(null, mapDispatchToProps)(BooksForm);
