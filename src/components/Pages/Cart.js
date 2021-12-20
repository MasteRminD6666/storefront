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
    setTimeout(() => {
        console.log('here',props.AllProducts);
    }, 5000);
    return (
        <>
         {props.AllProducts.map(element => {
          return (
            <>
            <Col>
              <Card style={{ width: '18rem' }} bg='Dark'>

                <Card.Img variant="top" src="" style={{ height: '160px', cover: 'fill' }} />
                <Card.Body>
                  <Card.Title>{element}</Card.Title>
                  <Card.Text>
                   
                  </Card.Text>
                  <Button variant="outline-success">Add to Cart</Button>{' '}
                </Card.Body>
              </Card>
              </Col>
            </>
          )
        })}
        </>
    );


};

export default connect(function (state) {
    return state
})(Carts)