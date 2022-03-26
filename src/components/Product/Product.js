import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ img, name, price, handleAddToCart }) => {

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <h5>Price: {price}</h5>
            <button onClick={() => handleAddToCart(name)} className='btn-cart'><p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p></button>

        </div>
    );
};

export default Product;