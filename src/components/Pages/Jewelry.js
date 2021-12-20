import './categories.css'

import store from '../Store/Products';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
const Jewelry = (props) => {
  const jewelry = [
    { id: 1, name: 'Allison Kaufman', image: 'https://imgs-s1.jewelryimages.net/vendor-jewelry-images/galleries/allisonkaufman/1x1/F213-70447-W.jpg?v=7', description: 'Allison-Kaufman Company, in business since 1920,diamond jewelry.', price: '20$' },
    { id: 2, name: 'Diamond Bracelets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OI3qFITYzcQGzXQUxMC8q1VfDfian1m1TA&usqp=CAU ', description: '', price: '20$' },
    { id: 3, name: '14KT Gold Bracelet', image: 'https://imgs-s1.jewelryimages.net/vendor-jewelry-images/galleries/allisonkaufman/1x1/H300-04074-YW.jpg?v=7', description: '', price: '20$' },
    { id: 4, name: '14KT Gold Bracelet', image: 'https://imgs-s1.jewelryimages.net/vendor-jewelry-images/galleries/allisonkaufman/1x1/M210-99474-W.jpg?v=7', description: '', price: '20$' },
    { id: 5, name: 'Ladies Bag Karina By Animo Italia - Tote Bag', image: 'https://imgs-s1.jewelryimages.net/vendor-jewelry-images/galleries/allisonkaufman/1x1/G217-34056-Y.jpg?v=7', description: '', price: '20$' },

  ]
  useEffect(() => {
    store.dispatch({
      type: 'SELECT_CATEGORY',
      payload: 'Jewelry'
    });
    store.dispatch({
      type: 'SET_PRODUCTS',
      payload: jewelry
    })
  }, [])
  console.log(props.products);
  return (
    <>
      <div className="home">

        <h1>this is the active category 👉 {props.categories.activeCategory}</h1>
      </div>
      <div className="center">

        <Row xs={3} md={4} >
          {props.products.map(element => {
            return (
              <>
                <Col>
                  <Card style={{ width: '18rem' }} bg='Dark'>

                    <Card.Img variant="top" src={element.image} style={{ height: '160px', cover: 'fill' }} />
                    <Card.Body>
                      <Card.Title>{element.name}</Card.Title>
                      <Card.Text>
                        {element.description}
                      </Card.Text>
                      <ListGroup variant="flush">
                        <ListGroup.Item>{element.price}</ListGroup.Item>

                      </ListGroup>
                      <Button variant="outline-success">Add to Cart</Button>{' '}
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
})(Jewelry)