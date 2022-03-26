import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);



    const handleClick = () => {

        const randomChoose = cart[Math.floor(cart.length * Math.random())];
        console.log(randomChoose);

    }




    return (
        <div className='cart'>
            <h4 className='item'>Selected Items</h4>
            <h5>{cart[0]}</h5>
            <h5>{cart[1]}</h5>
            <h5>{cart[2]}</h5>
            <h5>{cart[3]}</h5>
            <br />
            <p>You Choose:</p>
            <button onClick={handleClick} className='choose-btn'>CHOOSE ONE FOR ME</button>
            <button className='choose-again'>Choose Again</button>

        </div >
    );
};

export default Cart;