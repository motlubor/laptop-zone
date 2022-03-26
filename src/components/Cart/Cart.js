import React from 'react';
import Product from '../Product/Product';

const Cart = ({ cart }) => {
    // console.log(cart);


    for (const name of cart) {

        console.log(name);


    }



    return (
        <div>
            <h4>Order Summary</h4>
            <p>{cart}, </p>
        </div>
    );
};

export default Cart;