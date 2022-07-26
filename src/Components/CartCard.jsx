import "./Styles/CartCard.css";
import { useAuth } from "../Context/AuthContext";
import { handleIncrementDecrement, removeFromCart } from "../utils/cartHandler";
import { addToWishlist } from "../utils/wishlistHandler";

export default function CartCard({ product }) {

    const { userDetails, dispatchUser } = useAuth();

    const { wishList } = userDetails;

    const decreaseCount = (product) => {
        if (product?.qty < 2) {
            removeFromCart(product, dispatchUser);
        }
        else {
            handleIncrementDecrement(product, dispatchUser, "decrement")
        }
    }

    const increaseCount = (product) => {

        handleIncrementDecrement(product, dispatchUser, "increment");
    }

    const removeFromCartHandler = (product) => {
        removeFromCart(product, dispatchUser);
    }

    const moveToWishlistHandler = (product) => {

        const findProductInWishlist = wishList.find((item) => item._id === product._id);

        if (!findProductInWishlist) {
            addToWishlist(product, dispatchUser);
        }

        removeFromCart(product, dispatchUser);
    }


    return (<>
        <div className="card horizontal-card cart-horz-card  card-with-badge">
            <div className="h-card-header">
                <div className="h-card-img">
                    <img className="h-card-img" src={product.imageUrl} alt="Product" />
                </div>
                <div className="card-title">
                    <h3 className="text-l">{product.name} </h3>
                    <div className="product-info">
                        <p>₹{product.price}  {!(product.discount === 0) ? <s className="text-s">₹{product.prevPrice}</s> : <s></s>}<span className="item-qty">({product.quantity})</span></p>
                    </div>

                    <div className="cart-product-info flex-sb">
                        <div className="text-m product-rating">
                            <i className="fas fa-star"></i>
                            {product.rating}
                        </div>

                        <div className="product-qty">
                            <p><button onClick={() => decreaseCount(product)}>-</button><span>{product.qty}</span><button onClick={() => increaseCount(product)}>+</button></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-footer">
                <button className="btn icon-btn remove-from-cart-btn text-m" onClick={() => removeFromCartHandler(product)}>Remove From Cart</button>
                <button className="cart-btn btn icon-btn outline-secondary-btn" onClick={() => moveToWishlistHandler(product)}>Move to Wishlist</button>
            </div>
        </div>

    </>)
}