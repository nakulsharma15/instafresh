import "./Styles/WishlistCard.css";
import { useAuth } from "../Context/AuthContext";
import { removeFromWishlist } from "../utils/wishlistHandler";
import { addToCart } from "../utils/cartHandler";

export default function WishlistCard({ Item }) {

    const { userDetails, dispatchUser } = useAuth();

    const { cartList } = userDetails;

    const removeHandler = () => {
        removeFromWishlist(Item, dispatchUser);
    }

    const moveToCartHandler = (Item) => {

        const findProductInCart = cartList.find((item) => item._id === Item._id);

        if (!findProductInCart) {
            addToCart(Item, dispatchUser);
        }

        removeFromWishlist(Item, dispatchUser);
    }

    return (
        <>
            <div className="instafresh-card card card-with-badge card-with-text-overlay card-with-dismiss">
                <div className="card-img flex-justify-center">
                    <img className="card-img flex-justify-center" src={Item.imageUrl} alt="Product" />
                </div>
                <div className="card-title item-price-detail">
                    <h3>{Item.name}</h3>
                    <p>₹{Item.price}  {!(Item.discount === 0) ? <s className="text-s">₹{Item.prevPrice}</s> : null}</p>
                </div>

                <div className="discount-badge">
                    {!(Item.discount === 0) ? <div className="discount special-badge text-overlay">{Item.discount}% off</div> : null}
                </div>

                <i onClick={removeHandler} className="text-overlay dismiss-icon far fa-times-circle delete-icon" ></i>


                <div className="card-info flex-sb-c">
                    {Item.quantity}
                    <div className="badge-rating text-m product-rating">
                        <i className="fas fa-star"></i>
                        {Item.rating}
                    </div>
                </div>

                <div className="card-footer">
                    <button className="add-to-cart-btn btn icon-btn" onClick={() => moveToCartHandler(Item)}> Move to Cart</button>
                </div>
            </div>
        </>
    );
}