import './categories.css'
import store from '../Store';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

import { useDispatch, useSelector } from 'react-redux';
import { get } from '../Store/actions';
const Bags = () => {
  let cart = []


  const dispatch = useDispatch();
  const results = useSelector(state => state.Products.results.results);
  const allproducts = useSelector(state => state.Products.AllProducts);
  const [render, setRender] = useState(false)
  function getBags() {
    dispatch(get());
  }
  ;
  useEffect(() => {
    getBags()

    setTimeout(() => {
      setRender(true)
    }, 2000)
  }, [])

  const saveCart = (id, title, image, description, price) => {
    let obj = {
      id: id,
      title: title,
      image: image,
      description: description,
      price: price

    }
    cart.push(obj)

    console.log('this is before', cart);
    store.dispatch({
      type: 'SET_CART',
      payload: cart
    })
    console.log('this is after', allproducts);
    Swal.fire({
      title: 'item successfully added to your cart',
      width: 600,
      imageUrl: image ,
      padding: '3em',
      icon: 'success',  
      color: 'orange',
      imageWidth: 400,
      imageHeight: 200,
      
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
                      <Card style={{ width: '18rem', }} bg='light'>

                        <Card.Img variant="top" src={element.image} style={{ height: '160px', cover: 'fill' }} />
                        <Card.Body>
                          <Card.Title>{element.title}</Card.Title>
                          <Card.Text>
                            {element.description}
                          </Card.Text>
                       
                          <Button onClick={() => saveCart(element.id, element.title, element.image, element.description, element.price)} variant="outline-warning">Add to Cart</Button>{' '}
                        </Card.Body>
                        <ListGroup  as="ul" variant="flush">
                            <ListGroup.Item as="li" active>Price: {element.price}</ListGroup.Item> 
                          </ListGroup>
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
export default Bags