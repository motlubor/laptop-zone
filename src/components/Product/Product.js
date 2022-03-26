import React from 'react';
import './Product.css'

const Product = ({ img, name, price }) => {

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <p>Price: {price}</p>
            <button className='btn-cart'><p>Add to Cart</p></button>

        </div>
    );
};

export default Product;