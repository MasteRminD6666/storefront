import './categories.css'
import store from '../Store/';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
export default function Carts() {
    const dispatch = useDispatch();
    const results = useSelector(state => state.Products.AllProducts);
  console.log('this is the results',results);
    useEffect(() => {
       
      }, [])
    const deleteCart=(id)=>{
     
  
        
           const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'DELETE',
                    payload:id
                  });
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })  
     }
    return (
        <>
            <div className="home">
            <div className="center">

                <Row>
                    {results.map((element, index) => {
                        return (
                            <>
                                <Col>
                                    <Card  border="warning" style={{ width: '18rem' }} bg='light' className="mb-2">
                                        <Card.Img variant="top" src={element.image} style={{ height: '160px', cover: 'fill' }} />
                                        <Card.Body>
                                            <Card.Title>{element.title}</Card.Title>
                                            <Card.Text>
                                                {element.description}
                                            </Card.Text>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Price: {element.price}</ListGroup.Item>
                                                <Button onClick={() => deleteCart(element.id)} variant="outline-danger">Delete</Button>{' '}
                                            </ListGroup>
                                        </Card.Body>    
                                    </Card>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </div>
            </div>
        </>
    );


};

