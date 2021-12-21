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

import { useDispatch, useSelector } from 'react-redux';
import {get} from '../Store/actions';
const Jewelry = () => {
  let cart = []
  const dispatch = useDispatch();
  const  results  = useSelector(state => state.Products.results.results);
  const [render ,setRender] = useState(false)
  function getJewelry() {
    dispatch(get());
  }
;
  useEffect(() => {
    getJewelry()
  
   setTimeout(() => {
    setRender(true)
  }, 1000)
  }, [])
 
  const saveCart = (item)=>{
    cart.push(item)
   
    console.log('this is before',cart);
    store.dispatch({
      type: 'SET_CART',
      payload: cart
    })

  }

  // useEffect(() => {
  //   store.dispatch({
  //     type: 'SELECT_CATEGORY',
  //     payload: 'Bags'
  //   });
  //   store.dispatch({
  //     type: 'SET_PRODUCTS',
  //     payload: Bags
  //   })
 

  // }, [])
console.log('the results', results)
  return (
    <>
    {render ? <>
      <div className="home">

       

<div className="center">

  <Row xs={3} md={4} >
    {results.map(element => {
      return (
        <>
          <Col>
            <Card style={{ width: '18rem' }} bg='light'>

              <Card.Img variant="top" src={element.image} style={{ height: '160px', cover: 'fill' }} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
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
</div>
    </> : null}
  
      
    </>
  );


};

export default Jewelry