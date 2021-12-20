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
const Bags = (props) => {
  let cart = []

  const saveCart = (item)=>{
    cart.push(item)
   
    console.log('this is before',cart);
    store.dispatch({
      type: 'SET_CART',
      payload: cart
    })

  }
  const Bags = [
    { id:1, name: 'Ladies Bag Karina By Animo Italia - Tote Bag', image: 'https://www.seekpng.com/png/full/973-9735708_two-piece-fancy-ladies-bag-red-a-ladies.png', description: 'MATERIAL - Flex manufactured out of premium canvas.', price: '400$' },
    { id:2, name: '2019 New Arrival Women Bags', image: 'https://www.seekpng.com/png/full/892-8922429_ladies-bag-karina-by-animo-italia-tote-bag.png', description: 'This all-over Palm tree print backpack has a lot of room with a big inner pocket, a separate section for a 15 inch laptop,', price: '400$' },
    { id:3, name: '2021 Fashion Women Tote Bag Women Handbag Ladies PU', image: 'https://www.seekpng.com/png/full/951-9518010_ladies-bags-shoulder-bag.png', description: '', price: '400$' },
    { id:4, name: 'Brand DORIA DORE Big Tote Shoulder Bags Luxury Handbags Women Bags', image: 'https://www.seekpng.com/png/full/249-2499869_chittagong-handicraft-handmade-fashionable-ladies-handbag-handmade-crystal.png', description: 'no description', price: '400$' },
    { id:5, name: 'Nevenka Brand Women Bags Backpack Pu Leather Zipper', image: 'https://images.squarespace-cdn.com/content/v1/548ec3bee4b068057bfb6db7/1555524365342-FSB67T1LCR7M776FHNTB/palm+trees+bag.jpg?format=500w', description: 'Made from 100% polyester - (Suitable for Vegans)', price: '400$' },

  ]
  useEffect(() => {
    store.dispatch({
      type: 'SELECT_CATEGORY',
      payload: 'Bags'
    });
    store.dispatch({
      type: 'SET_PRODUCTS',
      payload: Bags
    })
 

  }, [])
  console.log(props.products);
  console.log(props);
  console.log('all', props.AllProducts);
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

                      <Button onClick={()=>saveCart(element.name)} variant="outline-success">Add to Cart</Button>{' '}
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
})(Bags)