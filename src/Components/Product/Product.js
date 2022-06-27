import React from 'react';

const Product = (props) => {
    const { name, price, description, img } = props.product;
    return (
        <div className="product">
            <h1>Name : {name}</h1>
            <img src={img} alt=''></img>
            <h3>Price : {price}</h3>
            <p>Highlight : {description}</p>
        </div>
    );
};

export default Product;