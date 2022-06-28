import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, []);
    const handleAddToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        cart={cart}
                        setCart={setCart}
                        handleAddToCart={handleAddToCart}
                        product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Cart</h1>
                <Cart cart={cart}></Cart>
                <OrderReview cart={cart} setCart={setCart}></OrderReview>
            </div>
        </div>
    );
};

export default Shop;