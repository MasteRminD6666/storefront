import './categories.css'
import store from '../Store/Products';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
const Men = (props) => {
  const men = [
    { id:1, name: 'Autumn Winter Vintage Striped Sweater Men Clothes Pullover Men Sweater Jumper Men', image: 'https://m.media-amazon.com/images/I/81xoC7S4+3L._AC_UY1000_.jpg', description: ' striped Style:Casual Material:Cotton Material:', price:'40$' },
    { id:2, name: 'Chair xenon', image: 'https://4.imimg.com/data4/LM/WA/GLADMIN-22582208/1-500x500.jpg', description: '' , price:'23$'
 },
    { id:3, name: 'phone holder', image: 'https://4.imimg.com/data4/KN/TP/GLADMIN-22582208/1-500x500.jpg', description: 'This is one of the more expensive accessories you can buy for your car. ', price:'300$' },
    { id:4, name: 'duck duck ', image: 'https://4.imimg.com/data4/SO/LQ/GLADMIN-22582208/1-500x500.jpg', description: 'We provide free worldwide shipping on all orders. Please allow 1 – 2 business days for processing and 3 – 5 days for delivery.', price:'300$' },
    { id:5, name: 'For auto vent Dusting ', image: 'https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH5b2a0773e06840b2bb3b513cb92b595bF%2FCOODRONY-Brand-Sweater-Men-High-Quality-Casual-O-Neck-Pullover-Men-Clothes-2020-Autumn-Winter-Thick.jpg', description: '', price:'300$' },

  ]
  useEffect(() => {
    store.dispatch({
      type: 'SELECT_CATEGORY',
      payload: 'men'
    });
    store.dispatch({
      type: 'SET_PRODUCTS',
      payload: men
    })
  }, [])
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
          <Card style={{ width: '18rem' }} bg='light'>

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
})(Men)