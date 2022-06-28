import React from 'react';

const ReviewItem = (props) => {
    const { name, id } = props.product;
    const { handleRemove } = props;
    return (
        <div>
            <h1>Name:{name} </h1>
            <button onClick={() => handleRemove(id)} className="button">remove</button>
        </div>
    );
};

export default ReviewItem;