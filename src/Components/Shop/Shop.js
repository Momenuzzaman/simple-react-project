import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Shop;