import "./Styles/Card.css";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { addToCart } from "../utils/cartHandler";
import { addToWishlist, removeFromWishlist } from "../utils/wishlistHandler";

export default function Card({ Item }) {

    const { isLoggedIn, userDetails, dispatchUser } = useAuth();

    const { wishList, cartList } = userDetails;

    const addToWishlistHandler = (Item) => {

        if (isLoggedIn) {

            const findProductInWishlist = wishList.find((item) => item._id === Item._id);

            if (findProductInWishlist) {
                removeFromWishlist(Item, dispatchUser);
            }

            else {
                addToWishlist(Item, dispatchUser);
            }

        }
        else {
            toast('You need to login to continue!',
                {
                    icon: '⚠️'
                }
            );
        }

    }

    const addToCartHandler = (Item) => {
        isLoggedIn ? addToCart(Item, dispatchUser) : toast('You need to login to continue!',
            {
                icon: '⚠️'
            }
        );
    }


    return (
        <>
            <div className="instafresh-card card card-with-badge card-with-text-overlay">

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

                <div className="card-info flex-sb-c">
                    {Item.quantity}
                    <div className="badge-rating text-m product-rating">
                        <i className="fas fa-star"></i>
                        {Item.rating}
                    </div>
                </div>

                <div className="card-footer">
                    {(cartList.find((item) => item._id === Item._id)) ?
                        <Link to="/cart"><button className="add-to-cart-btn btn icon-btn"> Go to Cart</button></Link> :
                        <button className="add-to-cart-btn btn icon-btn" onClick={() => addToCartHandler(Item)}> Add to Cart</button>
                    }

                    <button className="card-icon" onClick={() => addToWishlistHandler(Item)}> {(wishList.find((item) => item._id === Item._id)) ?
                        <i className="fas fa-heart"></i> :
                        <i className="far fa-heart"></i>} </button>
                </div>

            </div>

        </>)
}