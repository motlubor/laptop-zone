import React, { useState } from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);
    const [choose, setChoose] = useState([]);



    const handleClick = () => {

        const randomChoose = cart[Math.floor(cart.length * Math.random())];
        const choose = randomChoose;
        setChoose(choose)

    }




    return (
        <div className='cart'>
            <h3 className='item'>Selected Items</h3>
            <h4>{cart[0]}</h4>
            <h4>{cart[1]}</h4>
            <h4>{cart[2]}</h4>
            <h4>{cart[3]}</h4>
            <br />
            <p className='choose'>You Choose: {choose}</p>
            <button onClick={handleClick} className='choose-btn'>CHOOSE ONE FOR ME</button>
            <button className='choose-again'>Choose Again</button>

        </div >
    );
};

export default Cart;