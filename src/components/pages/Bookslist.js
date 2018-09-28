import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getbooks } from "../../actions/booksActions";
import { Col, Grid, Row } from 'react-bootstrap'
import BookItem from "./BookItem";
import BooksForm from "./BooksForm";

class Bookslist extends Component {

    componentDidMount() {
        this.props.getBook() //This is action
    }

    render() {
        const _Booklists = this.props.books.map(function (booksArray) {
            return (
                <Col xs={12} sm={6} md={4} key={booksArray.id}>
                    <BookItem id={booksArray.id}
                              title={booksArray.title}
                              description={booksArray.description}
                              price={booksArray.price}>
                    </BookItem>
                </Col>
            )
        })
        console.log('Can we access the state from here', this.props.books)
        return (

            <Grid>
                <Row styles={{marginTop: '15px'}}>
                    <Col xs={12} sm={6}>
                          <BooksForm/>
                    </Col>
                    {_Booklists}
                </Row>
            </Grid>
        );
    }
}


function mapStateToProps(state) { //Just like the store.subscribe method
    return {
        books: state.books.books
    }

}


function mapDispatchToProps(dispatch) { //Just like the store.subscribe method
    return bindActionCreators({
        getBook: getbooks
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Bookslist);
