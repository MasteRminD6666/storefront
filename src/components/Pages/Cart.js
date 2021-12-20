import './categories.css'
import store from '../Store/Products';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
const Carts = (props) => {
    const deleteCart=(item)=>{
    
    
       if (props.AllProducts.includes(item)) {
        
        store.dispatch({
            type: 'Delete',
          });
       }
    }

    return (
        <>
            <div className="home">

                <h1>this is the active category 👉 {props.categories.activeCategory}</h1>
            </div>
            <div className="center">

                <Row xs={3} md={4} >
                    {props.AllProducts.map((element , index) => {
                        return (
                            <>
                                <Col>
                                    <Card style={{ width: '18rem' }} bg='light'>
                                        <Card.Body>
                                            <Card.Title>{element}</Card.Title>
                                            <Button onClick={()=>deleteCart(index)} variant="outline-danger">Delete</Button>{' '}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
                        )
                    })}
                </Row>

            </div>



        </>
    );


};

export default connect(function (state) {
    return state
})(Carts)