import React from 'react';
import ReviewItem from '../../ReviewItem/ReviewItem';
import useProduct from '../UseProducts';

const OrderReview = (props) => {
    const { setCart, cart } = props;
    // const [products] = useProduct();
    const handleRemove = id => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
    }
    return (
        <div>
            {
                cart.map(product => <ReviewItem
                    handleRemove={handleRemove}
                    product={product}>
                </ReviewItem>)
            }
        </div>
    );
};

export default OrderReview;