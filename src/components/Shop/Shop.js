import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        handleAddToCart={handleAddToCart}
                        key={product.id}
                        img={product.img}
                        name={product.name}
                        price={product.price}

                    ></Product>)
                }


            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Shop;