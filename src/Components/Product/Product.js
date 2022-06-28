
import './Product.css'

const Product = (props) => {
    const { name, price, description, img } = props.product;
    const { handleAddToCart, product, cart } = props;
    // console.log(cart)

    const newCart = cart.find(pd => pd.id === product.id)

    // console.log(newCart);

    return (
        <div className="product">
            <h1>Name : {name}</h1>
            <img className="img" src={img} alt=''></img>
            <h3>Price : {price}</h3>
            <p>Highlight : {description}</p>

            <button disabled={newCart} className="button" onClick={() => handleAddToCart(product)}>Add Product</button>

        </div >
    );
};

export default Product;