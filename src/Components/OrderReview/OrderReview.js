import React from 'react';
import ReviewItem from '../../ReviewItem/ReviewItem';
import useProduct from '../UseProducts';

const OrderReview = (props) => {
    const { setCart, cart } = props;
    const [products] = useProduct();

    return (
        <div>
            {
                cart.map(product => <ReviewItem product={product}></ReviewItem>)
            }
            <h1>{products.length}</h1>
        </div>
    );
};

export default OrderReview;