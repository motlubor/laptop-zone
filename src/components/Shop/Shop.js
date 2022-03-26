import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        img={product.img}
                        name={product.name}
                        price={product.price}

                    ></Product>)
                }


            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>

    );
};

export default Shop;