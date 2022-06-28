import React from 'react';

const ReviewItem = (props) => {
    const { name } = props.product
    return (
        <div>
            <h1>Name:{name} </h1>
            <button className="button">remove</button>
        </div>
    );
};

export default ReviewItem;