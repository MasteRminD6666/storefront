import './categories.css'
import store from '../Store/Products';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Car = (props) => {

  useEffect(() => {

    store.dispatch({
      type: 'SELECT_CATEGORY',
      payload: 'Cars'
    });
    store.dispatch({
      type: 'SET_PRODUCTS',
      payload: ['Porsche', 'Hyundai', 'SAIC ', 'BMW']
    })

  }, [])

  console.log(props.products);
  return (
    <>

      <div className="home">

        <h1>this is the active category 👉 {props.categories.activeCategory}</h1>

      </div>
      <div className="home">
        <br></br>
        <h1>This is the Products </h1>
        <ul></ul>
        {props.products.map(element => {

          return (
            <>

              <li key="{element}">{element}</li>
            </>
          )
        })}

      </div>

    </>
  );


};

export default connect(function (state) {
  return state
})(Car)