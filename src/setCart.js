import React from 'react';

const setCart = (props) => {
    const cart = props.cart
    return (
        <div>
            <h1>Cart : {cart.length}</h1>
        </div>
    );
};

export default setCart;