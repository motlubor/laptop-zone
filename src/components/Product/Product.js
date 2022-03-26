import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ img, name, price, handleAddToCart }) => {

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(name)} className='btn-cart'><p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p></button>

        </div>
    );
};

export default Product;