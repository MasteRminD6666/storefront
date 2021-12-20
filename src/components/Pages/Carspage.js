import './categories.css'
import store from '../Store/Products';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
const Car = (props) => {
  const Cars = [
    { id:1, name: 'Car stearins', image: 'https://image.made-in-china.com/202f0j00uWpgQrUdVibI/Hot-Selling-Car-Steering-Wheel-Cover-Car-Accessories-Car-Decoration-Auto-Spare-Part.webp', description: ' Hot Selling Car Steering Wheel Cover Car Accessories Car Decoration Auto Spare Part' },
    { id:2, name: 'Chair xenon', image: 'https://txonstores.com/content/images/thumbs/0003459_seat-protectors_300.jpeg', description: 'Car seat protector for front seats  Non-skid mesh backing keeps car seat protectors in place  Adjustable belts secure protector to most all makes and model'
 },
    { id:3, name: 'phone holder', image: 'https://www.techadvisor.com/cmsdata/slideshow/3663427/best-car-tech-accessories-2020_thumb1200_16-9.jpg', description: 'This is one of the more expensive accessories you can buy for your car. ' },
    { id:4, name: 'duck duck ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_B5SzWdQM9qBo0-yS0w-RisGoEjihv2Kaw&usqp=CAU', description: 'We provide free worldwide shipping on all orders. Please allow 1 – 2 business days for processing and 3 – 5 days for delivery.' },
    { id:5, name: 'For auto vent Dusting ', image: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-08/10/14/asset/b583a57efe7f/sub-buzz-6898-1597069393-40.jpg?output-quality=auto', description: 'A container of gel cleaning putty that you can use to peel the dirt off your dashboard, air vents, and pretty much everything else you own. It feels like slime, so its super fun to use, too.' },

  ]
  useEffect(() => {

    store.dispatch({
      type: 'SELECT_CATEGORY',
      payload: 'Cars'
    });
    store.dispatch({
      type: 'SET_PRODUCTS',
      payload: Cars
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
})(Car)