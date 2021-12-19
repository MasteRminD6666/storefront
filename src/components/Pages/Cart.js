import './categories.css'
import store from '../Store/Products';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Carts = (props) => {



    console.log(props.products);
    return (
        <>
            <div className="home">

                <h1>Cart Here</h1>
            </div>

        </>
    );


};

export default connect(function (state) {
    return state
})(Carts)